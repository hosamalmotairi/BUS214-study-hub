// ══════════════════════════════════════════════
//  BUS 214 — Firebase Integration
//  Auth (Google) + Firestore + Leaderboard
// ══════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyCPPXH9FauYE68HriZn0Zf9Q_VN11Q8lCo",
  authDomain: "bus214-study-hub.firebaseapp.com",
  projectId: "bus214-study-hub",
  storageBucket: "bus214-study-hub.firebasestorage.app",
  messagingSenderId: "919023835045",
  appId: "1:919023835045:web:badcaaa3a113516a04ba4c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

let currentUser = null;

// ── SIGN IN / OUT ─────────────────────────────
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(err => {
    console.error('Sign-in error:', err);
  });
}

function signOutUser() {
  auth.signOut();
}

// ── AUTH STATE ────────────────────────────────
auth.onAuthStateChanged(async user => {
  currentUser = user;
  updateAuthUI(user);
  if (user) {
    await syncUserProgress(user);
    renderLeaderboard();
  }
});

function updateAuthUI(user) {
  const signInBtn  = document.getElementById('fb-signin-btn');
  const userInfo   = document.getElementById('fb-user-info');
  const userAvatar = document.getElementById('fb-user-avatar');
  const userName   = document.getElementById('fb-user-name');
  if (user) {
    if (signInBtn)  signInBtn.style.display  = 'none';
    if (userInfo)   userInfo.style.display   = 'flex';
    if (userAvatar && user.photoURL) userAvatar.src = user.photoURL;
    if (userName)   userName.textContent = user.displayName || user.email;
  } else {
    if (signInBtn)  signInBtn.style.display  = 'flex';
    if (userInfo)   userInfo.style.display   = 'none';
  }
}

// ── SYNC PROGRESS (Local ↔ Firestore) ─────────
async function syncUserProgress(user) {
  try {
    const ref = db.collection('users').doc(user.uid);
    const doc = await ref.get();

    const localBest    = JSON.parse(localStorage.getItem('bus214_bestScores') || '{}');
    const localTotal   = parseInt(localStorage.getItem('bus214_totalQuizzes') || '0');
    const localCorrect = parseInt(localStorage.getItem('bus214_totalCorrect')  || '0');

    let mergedBest    = { ...localBest };
    let mergedTotal   = localTotal;
    let mergedCorrect = localCorrect;

    if (doc.exists) {
      const data = doc.data();
      const remoteBest = data.bestScores || {};
      Object.keys(remoteBest).forEach(k => {
        if (mergedBest[k] === undefined || remoteBest[k] > mergedBest[k]) {
          mergedBest[k] = remoteBest[k];
        }
      });
      mergedTotal   = Math.max(localTotal,   data.totalQuizzes  || 0);
      mergedCorrect = Math.max(localCorrect, data.totalCorrect  || 0);
    }

    // Push merged back to localStorage + global vars
    localStorage.setItem('bus214_bestScores',    JSON.stringify(mergedBest));
    localStorage.setItem('bus214_totalQuizzes',  mergedTotal);
    localStorage.setItem('bus214_totalCorrect',  mergedCorrect);
    if (typeof bestScores    !== 'undefined') bestScores    = mergedBest;
    if (typeof totalQuizzes  !== 'undefined') totalQuizzes  = mergedTotal;
    if (typeof totalCorrect  !== 'undefined') totalCorrect  = mergedCorrect;

    // Save to Firestore
    await ref.set({
      profile: {
        name:     user.displayName || '',
        email:    user.email       || '',
        photoURL: user.photoURL    || ''
      },
      bestScores:   mergedBest,
      totalQuizzes: mergedTotal,
      totalCorrect: mergedCorrect,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    // Refresh UI
    if (typeof renderMasteryBadges  === 'function') renderMasteryBadges();
    if (typeof renderHomeMastery    === 'function') renderHomeMastery();
    if (typeof renderDashboard      === 'function') renderDashboard();
  } catch(e) {
    console.error('Sync error:', e);
  }
}

// ── SAVE QUIZ RESULT ──────────────────────────
async function saveQuizResult(ch, score, correct, wrong, elapsed) {
  if (!currentUser) return;
  try {
    const uid = currentUser.uid;
    // Log session
    await db.collection('users').doc(uid).collection('sessions').add({
      ch, score, correct, wrong, elapsed,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
    // Update summary
    const localBest    = JSON.parse(localStorage.getItem('bus214_bestScores') || '{}');
    const localTotal   = parseInt(localStorage.getItem('bus214_totalQuizzes') || '0');
    const localCorrect = parseInt(localStorage.getItem('bus214_totalCorrect')  || '0');
    await db.collection('users').doc(uid).set({
      bestScores:   localBest,
      totalQuizzes: localTotal,
      totalCorrect: localCorrect,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    renderLeaderboard();
  } catch(e) {
    console.error('Save quiz error:', e);
  }
}

// ── LEADERBOARD ───────────────────────────────
async function renderLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;

  if (!currentUser) {
    container.innerHTML = '<div class="lb-signin">سجّل دخولك بـ Google لترى الـ Leaderboard 🔒</div>';
    return;
  }

  container.innerHTML = '<div class="lb-loading">⏳ جاري التحميل...</div>';
  try {
    const snap = await db.collection('users')
      .orderBy('bestScores.all', 'desc')
      .limit(20)
      .get();

    if (snap.empty) {
      container.innerHTML = '<div class="lb-empty">لا يوجد طلاب بعد — كن أول من يدخل! 🚀</div>';
      return;
    }

    const medals = ['🥇','🥈','🥉'];
    let html = '';
    let rank = 1;

    snap.forEach(doc => {
      const d    = doc.data();
      const p    = d.profile    || {};
      const b    = d.bestScores || {};
      const bestAll = b.all !== undefined ? b.all + '%' : '—';
      const total   = d.totalQuizzes || 0;
      const isMe    = doc.id === currentUser.uid;
      const icon    = medals[rank - 1] || ('#' + rank);
      const avatar  = p.photoURL
        ? `<img class="lb-avatar" src="${p.photoURL}" onerror="this.src=''">`
        : `<div class="lb-avatar lb-avatar-ph">👤</div>`;

      html += `
      <div class="lb-row${isMe ? ' lb-me' : ''}">
        <div class="lb-rank">${icon}</div>
        ${avatar}
        <div class="lb-info">
          <div class="lb-name">${p.name || 'طالب'}${isMe ? ' <span class="lb-you">(أنت)</span>' : ''}</div>
          <div class="lb-sub">${total} كويز &nbsp;·&nbsp; F1: ${b.ch1 !== undefined ? b.ch1+'%':'—'} &nbsp;·&nbsp; F2: ${b.ch2 !== undefined ? b.ch2+'%':'—'} &nbsp;·&nbsp; F3: ${b.ch3 !== undefined ? b.ch3+'%':'—'}</div>
        </div>
        <div class="lb-score">${bestAll}</div>
      </div>`;
      rank++;
    });

    container.innerHTML = html;
  } catch(e) {
    console.error('Leaderboard error:', e);
    container.innerHTML = '<div class="lb-error">تعذّر التحميل — حاول مرة أخرى</div>';
  }
}
