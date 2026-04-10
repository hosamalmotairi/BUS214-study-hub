// ══════════════════════════════════════════════
//  BUS 214 — Firebase Integration
//  Email/Password Auth + Firestore + Leaderboard
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

// ── AUTH OVERLAY FUNCTIONS ────────────────────
function authTab(tab) {
  const isLogin = tab === "login";
  const loginBtn = document.getElementById("tab-login");
  const regBtn = document.getElementById("tab-register");
  loginBtn.classList.toggle("active", isLogin);
  regBtn.classList.toggle("active", !isLogin);
  document.getElementById("auth-name-wrap").style.display = isLogin ? "none" : "block";
  document.getElementById("auth-submit").textContent = isLogin ? "دخول" : "إنشاء حساب";
  document.getElementById("auth-submit").dataset.mode = tab;
  document.getElementById("auth-err").textContent = "";
}

async function authSubmit() {
  const mode  = document.getElementById("auth-submit").dataset.mode || "login";
  const email = document.getElementById("auth-email").value.trim();
  const pass  = document.getElementById("auth-pass").value;
  const name  = document.getElementById("auth-name") ? document.getElementById("auth-name").value.trim() : "";
  const err   = document.getElementById("auth-err");
  if (!email || !pass) { err.textContent = "الرجاء تعبئة جميع الحقول"; return; }
  if (mode === "register" && !name) { err.textContent = "الرجاء كتابة اسمك"; return; }
  document.getElementById("auth-submit").textContent = "...";
  try {
    if (mode === "login") {
      await auth.signInWithEmailAndPassword(email, pass);
    } else {
      const cred = await auth.createUserWithEmailAndPassword(email, pass);
      await cred.user.updateProfile({ displayName: name });
      await db.collection("users").doc(cred.user.uid).set({
        name, email, createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
    err.textContent = "";
  } catch(e) {
    const code = e.code || '';
    const msgs = {
      'auth/user-not-found': 'البريد الإلكتروني غير مسجّل',
      'auth/wrong-password': 'كلمة المرور غير صحيحة',
      'auth/invalid-credential': 'البريد أو كلمة المرور غير صحيحة',
      'auth/email-already-in-use': 'البريد الإلكتروني مستخدم بالفعل',
      'auth/weak-password': 'كلمة المرور ضعيفة جداً (6 أحرف على الأقل)',
      'auth/invalid-email': 'صيغة البريد الإلكتروني غير صحيحة',
      'auth/too-many-requests': 'محاولات كثيرة، يرجى الانتظار قليلاً'
    };
    err.textContent = msgs[code] || e.message.replace("Firebase: ", "").replace(/ \(auth\/.*\)/, "");
    document.getElementById("auth-submit").textContent = mode === "login" ? "دخول" : "إنشاء حساب";
  }
}

function skipAuth() {
  document.getElementById("auth-overlay").style.display = "none";
  // Guest: don't show user info or logout button
}

function signOutUser() {
  auth.signOut().then(() => {
    document.getElementById("auth-overlay").style.display = "flex";
    const userInfo = document.getElementById("fb-user-info");
    if (userInfo) userInfo.style.display = "none";
  });
}

// ── AUTH STATE ────────────────────────────────
auth.onAuthStateChanged(async user => {
  currentUser = user;
  if (user) {
    document.getElementById("auth-overlay").style.display = "none";
    const userInfo = document.getElementById("fb-user-info");
    const userName = document.getElementById("fb-user-name");
    if (userInfo) userInfo.style.display = "flex";
    if (userName) userName.textContent = user.displayName || user.email.split("@")[0];
    await syncUserProgress(user);
  } else {
    document.getElementById("auth-overlay").style.display = "flex";
    const userInfo = document.getElementById("fb-user-info");
    if (userInfo) userInfo.style.display = "none";
  }
});

// ── SYNC PROGRESS ─────────────────────────────
async function syncUserProgress(user) {
  try {
    const ref = db.collection('users').doc(user.uid);
    const doc = await ref.get();
    const localBest    = JSON.parse(localStorage.getItem('bus214_bestScores') || '{}');
    const localTotal   = parseInt(localStorage.getItem('bus214_totalQuizzes') || '0');
    const localCorrect = parseInt(localStorage.getItem('bus214_totalCorrect')  || '0');
    const localWrong   = parseInt(localStorage.getItem('bus214_totalWrong')    || '0');
    let mergedBest    = { ...localBest };
    let mergedTotal   = localTotal;
    let mergedCorrect = localCorrect;
    let mergedWrong   = localWrong;
    if (doc.exists) {
      const data = doc.data();
      const remoteBest = data.bestScores || {};
      Object.keys(remoteBest).forEach(k => {
        if (mergedBest[k] === undefined || remoteBest[k] > mergedBest[k]) mergedBest[k] = remoteBest[k];
      });
      mergedTotal   = Math.max(localTotal,   data.totalQuizzes  || 0);
      mergedCorrect = Math.max(localCorrect, data.totalCorrect  || 0);
      mergedWrong   = Math.max(localWrong,   data.totalWrong    || 0);
    }
    localStorage.setItem('bus214_bestScores',   JSON.stringify(mergedBest));
    localStorage.setItem('bus214_totalQuizzes', mergedTotal);
    localStorage.setItem('bus214_totalCorrect', mergedCorrect);
    localStorage.setItem('bus214_totalWrong',   String(mergedWrong));
    if (typeof bestScores   !== 'undefined') bestScores   = mergedBest;
    if (typeof totalQuizzes !== 'undefined') totalQuizzes = mergedTotal;
    if (typeof totalCorrect !== 'undefined') totalCorrect = mergedCorrect;
    if (typeof totalWrong   !== 'undefined') totalWrong   = mergedWrong;
    await ref.set({
      profile: { name: user.displayName || '', email: user.email || '' },
      bestScores: mergedBest, totalQuizzes: mergedTotal, totalCorrect: mergedCorrect, totalWrong: mergedWrong,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    if (typeof renderMasteryBadges === 'function') renderMasteryBadges();
    if (typeof renderHomeMastery   === 'function') renderHomeMastery();
    if (typeof renderDashboard     === 'function') renderDashboard();
  } catch(e) { console.error('Sync error:', e); }
}

// ── SAVE QUIZ RESULT ──────────────────────────
async function saveQuizResult(ch, score, correct, wrong, elapsed) {
  if (!currentUser) return;
  try {
    const uid = currentUser.uid;
    await db.collection('users').doc(uid).collection('sessions').add({
      ch, score, correct, wrong, elapsed,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
    const localBest    = JSON.parse(localStorage.getItem('bus214_bestScores') || '{}');
    const localTotal   = parseInt(localStorage.getItem('bus214_totalQuizzes') || '0');
    const localCorrect = parseInt(localStorage.getItem('bus214_totalCorrect')  || '0');
    await db.collection('users').doc(uid).set({
      bestScores: localBest, totalQuizzes: localTotal, totalCorrect: localCorrect,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } catch(e) { console.error('Save quiz error:', e); }
}

