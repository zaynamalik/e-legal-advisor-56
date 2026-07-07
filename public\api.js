// ============================================================
//  E-Legal Advisor — API Bridge
//  Replaces localStorage with real Node.js + SQLite backend
//  Just add <script src="api.js"></script> to your HTML
// ============================================================

const API_BASE = 'http://localhost:3000/api';

// ── Token Management ─────────────────────────────────────────
function getToken() { return localStorage.getItem('_jwt_token'); }
function setToken(t) { localStorage.setItem('_jwt_token', t); }
function clearToken() { localStorage.removeItem('_jwt_token'); }

function authHeaders() {
  return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` };
}

// ── AUTH ─────────────────────────────────────────────────────
async function apiRegister(fullName, email, password) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName, email, password })
  });
  const data = await res.json();
  if (data.success) setToken(data.token);
  return data;
}

async function apiLogin(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.success) setToken(data.token);
  return data;
}

function apiLogout() { clearToken(); }

async function apiGetMe() {
  const res = await fetch(`${API_BASE}/me`, { headers: authHeaders() });
  return res.json();
}

// ── CONSULTATIONS ─────────────────────────────────────────────
async function apiSaveMessage(role, message, topic = null) {
  if (!getToken()) return;
  await fetch(`${API_BASE}/consultations`, {
    method: 'POST', headers: authHeaders(),
    body: JSON.stringify({ role, message, topic })
  });
}

async function apiGetHistory() {
  if (!getToken()) return [];
  const res = await fetch(`${API_BASE}/consultations`, { headers: authHeaders() });
  const data = await res.json();
  return data.data || [];
}

async function apiClearHistory() {
  if (!getToken()) return;
  await fetch(`${API_BASE}/consultations`, { method: 'DELETE', headers: authHeaders() });
}

// ── FIR DRAFTS ────────────────────────────────────────────────
async function apiSaveDraft(draft) {
  if (!getToken()) return { success: false };
  const res = await fetch(`${API_BASE}/fir-drafts`, {
    method: 'POST', headers: authHeaders(), body: JSON.stringify(draft)
  });
  return res.json();
}

async function apiGetDrafts() {
  if (!getToken()) return [];
  const res = await fetch(`${API_BASE}/fir-drafts`, { headers: authHeaders() });
  const data = await res.json();
  return data.data || [];
}

async function apiDeleteDraft(id) {
  if (!getToken()) return;
  await fetch(`${API_BASE}/fir-drafts/${id}`, { method: 'DELETE', headers: authHeaders() });
}

// ── QUIZ RESULTS ──────────────────────────────────────────────
async function apiSaveQuizResult(score, total, category = 'General') {
  if (!getToken()) return;
  const res = await fetch(`${API_BASE}/quiz-results`, {
    method: 'POST', headers: authHeaders(),
    body: JSON.stringify({ score, total, category })
  });
  return res.json();
}

async function apiGetQuizHistory() {
  if (!getToken()) return [];
  const res = await fetch(`${API_BASE}/quiz-results`, { headers: authHeaders() });
  const data = await res.json();
  return data.data || [];
}

// ── RISK ALERTS ───────────────────────────────────────────────
async function apiSaveRiskAlert(description, riskLevel = 'medium', lawsFlagged = '') {
  if (!getToken()) return;
  await fetch(`${API_BASE}/risk-alerts`, {
    method: 'POST', headers: authHeaders(),
    body: JSON.stringify({ description, riskLevel, lawsFlagged })
  });
}

// ── STATS ─────────────────────────────────────────────────────
async function apiGetStats() {
  if (!getToken()) return null;
  const res = await fetch(`${API_BASE}/stats`, { headers: authHeaders() });
  const data = await res.json();
  return data.stats || null;
}

console.log('E-Legal Advisor API Bridge loaded. Backend: http://localhost:3000');
