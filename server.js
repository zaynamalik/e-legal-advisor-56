// ============================================================
//  E-Legal Advisor — Node.js + SQLite Backend
//  Author: Group 6 | Ms. Abida Idrees | LCWU
//  Tech Stack: Node.js, Express, SQLite (sql.js), JWT, bcryptjs
// ============================================================

const express  = require('./node_modules/express');
const cors     = require('./node_modules/cors');
const bcrypt   = require('./node_modules/bcryptjs');
const jwt      = require('./node_modules/jsonwebtoken');
const initSqlJs = require('./node_modules/sql.js');
const fs       = require('fs');
const path     = require('path');

const app        = express();
const PORT       = 3000;
const JWT_SECRET = 'elegal_advisor_lcwu_secret_2024';
const DB_FILE    = './elegal.db';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── SQLite via sql.js (pure JS, no native compile needed) ───
let db;

async function initDatabase() {
  const SQL = await initSqlJs();

  if (fs.existsSync(DB_FILE)) {
    const fileBuffer = fs.readFileSync(DB_FILE);
    db = new SQL.Database(fileBuffer);
    console.log('Loaded existing database: elegal.db');
  } else {
    db = new SQL.Database();
    console.log('Created new database: elegal.db');
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name    TEXT NOT NULL,
      email        TEXT UNIQUE NOT NULL,
      password     TEXT NOT NULL,
      account_type TEXT DEFAULT 'citizen',
      created_at   TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS consultations (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id    INTEGER NOT NULL,
      role       TEXT NOT NULL,
      message    TEXT NOT NULL,
      topic      TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS fir_drafts (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id       INTEGER NOT NULL,
      document_type TEXT DEFAULT 'FIR Application',
      full_name     TEXT,
      date_time     TEXT,
      location      TEXT,
      nature        TEXT,
      incident      TEXT,
      accused       TEXT,
      witnesses     TEXT,
      evidence      TEXT,
      created_at    TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS quiz_results (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id    INTEGER NOT NULL,
      score      INTEGER NOT NULL,
      total      INTEGER NOT NULL,
      percentage REAL NOT NULL,
      category   TEXT DEFAULT 'General',
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS risk_alerts (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id      INTEGER NOT NULL,
      description  TEXT NOT NULL,
      risk_level   TEXT DEFAULT 'medium',
      laws_flagged TEXT,
      created_at   TEXT DEFAULT (datetime('now'))
    );
  `);

  // Save helper
  function saveDB() {
    const data = db.export();
    fs.writeFileSync(DB_FILE, Buffer.from(data));
  }
  global.saveDB = saveDB;

  // Seed demo user
  const check = db.exec("SELECT id FROM users WHERE email='demo@example.com'");
  if (!check.length || !check[0].values.length) {
    const hash = bcrypt.hashSync('demo123', 10);
    db.run("INSERT INTO users (full_name, email, password) VALUES (?,?,?)", ['Demo User', 'demo@example.com', hash]);
    saveDB();
    console.log('Demo user created: demo@example.com / demo123');
  }

  // Helper: query one row
  global.queryOne = (sql, params = []) => {
    const res = db.exec(sql.replace(/\?/g, () => {
      const v = params.shift();
      return typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v;
    }));
    if (!res.length || !res[0].values.length) return null;
    const cols = res[0].columns;
    const vals = res[0].values[0];
    return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
  };

  // Helper: query all rows
  global.queryAll = (sql, params = []) => {
    let q = sql;
    const p = [...params];
    q = q.replace(/\?/g, () => {
      const v = p.shift();
      return typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : (v === null ? 'NULL' : v);
    });
    const res = db.exec(q);
    if (!res.length) return [];
    const cols = res[0].columns;
    return res[0].values.map(vals => Object.fromEntries(cols.map((c, i) => [c, vals[i]])));
  };

  // Helper: run insert/update/delete
  global.runSQL = (sql, params = []) => {
    let q = sql;
    const p = [...params];
    q = q.replace(/\?/g, () => {
      const v = p.shift();
      return typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : (v === null ? 'NULL' : v);
    });
    db.run(q);
    const idRes = db.exec("SELECT last_insert_rowid() as id");
    const lastId = idRes.length ? idRes[0].values[0][0] : null;
    saveDB();
    return { lastId };
  };

  startServer();
}

// ── Auth Middleware ─────────────────────────────────────────
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ══════════════════════════════════════════════════════════
//  ROUTES
// ══════════════════════════════════════════════════════════

function startServer() {

  // ── REGISTER ───────────────────────────────────────────
  app.post('/api/register', (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password)
      return res.status(400).json({ success: false, message: 'All fields required.' });
    if (password.length < 4)
      return res.status(400).json({ success: false, message: 'Password min 4 characters.' });
    const existing = queryOne('SELECT id FROM users WHERE email=?', [email]);
    if (existing)
      return res.status(409).json({ success: false, message: 'Email already registered.' });
    const hashed = bcrypt.hashSync(password, 10);
    const { lastId } = runSQL('INSERT INTO users (full_name, email, password) VALUES (?,?,?)', [fullName, email, hashed]);
    const token = jwt.sign({ id: lastId, email, fullName }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, message: 'Account created!', token, user: { id: lastId, fullName, email } });
  });

  // ── LOGIN ───────────────────────────────────────────────
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = queryOne('SELECT * FROM users WHERE email=?', [email]);
    if (!user || !bcrypt.compareSync(password, user.password))
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    const token = jwt.sign({ id: user.id, email: user.email, fullName: user.full_name }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, message: 'Signed in!', token, user: { id: user.id, fullName: user.full_name, email: user.email } });
  });

  // ── GET ME ──────────────────────────────────────────────
  app.get('/api/me', authenticate, (req, res) => {
    const user = queryOne('SELECT id, full_name, email, account_type, created_at FROM users WHERE id=?', [req.user.id]);
    res.json({ success: true, user });
  });

  // ── CONSULTATIONS ───────────────────────────────────────
  app.post('/api/consultations', authenticate, (req, res) => {
    const { role, message, topic } = req.body;
    const { lastId } = runSQL('INSERT INTO consultations (user_id, role, message, topic) VALUES (?,?,?,?)', [req.user.id, role, message, topic || null]);
    res.json({ success: true, id: lastId });
  });

  app.get('/api/consultations', authenticate, (req, res) => {
    const rows = queryAll('SELECT * FROM consultations WHERE user_id=? ORDER BY created_at DESC LIMIT 100', [req.user.id]);
    res.json({ success: true, data: rows });
  });

  app.delete('/api/consultations', authenticate, (req, res) => {
    runSQL('DELETE FROM consultations WHERE user_id=?', [req.user.id]);
    res.json({ success: true, message: 'History cleared.' });
  });

  // ── FIR DRAFTS ──────────────────────────────────────────
  app.post('/api/fir-drafts', authenticate, (req, res) => {
    const { documentType, fullName, dateTime, location, nature, incident, accused, witnesses, evidence } = req.body;
    const { lastId } = runSQL(
      'INSERT INTO fir_drafts (user_id,document_type,full_name,date_time,location,nature,incident,accused,witnesses,evidence) VALUES (?,?,?,?,?,?,?,?,?,?)',
      [req.user.id, documentType, fullName, dateTime, location, nature, incident, accused, witnesses, evidence]
    );
    res.json({ success: true, id: lastId, message: 'Draft saved to database!' });
  });

  app.get('/api/fir-drafts', authenticate, (req, res) => {
    const rows = queryAll('SELECT * FROM fir_drafts WHERE user_id=? ORDER BY created_at DESC', [req.user.id]);
    res.json({ success: true, data: rows });
  });

  app.delete('/api/fir-drafts/:id', authenticate, (req, res) => {
    runSQL('DELETE FROM fir_drafts WHERE id=? AND user_id=?', [req.params.id, req.user.id]);
    res.json({ success: true, message: 'Draft deleted.' });
  });

  // ── QUIZ RESULTS ────────────────────────────────────────
  app.post('/api/quiz-results', authenticate, (req, res) => {
    const { score, total, category } = req.body;
    const percentage = Math.round((score / total) * 100);
    const { lastId } = runSQL(
      'INSERT INTO quiz_results (user_id,score,total,percentage,category) VALUES (?,?,?,?,?)',
      [req.user.id, score, total, percentage, category || 'General']
    );
    res.json({ success: true, id: lastId, percentage });
  });

  app.get('/api/quiz-results', authenticate, (req, res) => {
    const rows = queryAll('SELECT * FROM quiz_results WHERE user_id=? ORDER BY created_at DESC', [req.user.id]);
    res.json({ success: true, data: rows });
  });

  // ── RISK ALERTS ─────────────────────────────────────────
  app.post('/api/risk-alerts', authenticate, (req, res) => {
    const { description, riskLevel, lawsFlagged } = req.body;
    const { lastId } = runSQL(
      'INSERT INTO risk_alerts (user_id,description,risk_level,laws_flagged) VALUES (?,?,?,?)',
      [req.user.id, description, riskLevel || 'medium', lawsFlagged || '']
    );
    res.json({ success: true, id: lastId });
  });

  app.get('/api/risk-alerts', authenticate, (req, res) => {
    const rows = queryAll('SELECT * FROM risk_alerts WHERE user_id=? ORDER BY created_at DESC', [req.user.id]);
    res.json({ success: true, data: rows });
  });

  // ── STATS (viva demo) ───────────────────────────────────
  app.get('/api/stats', authenticate, (req, res) => {
    const totalUsers    = queryOne('SELECT COUNT(*) as c FROM users').c;
    const totalConsults = queryOne('SELECT COUNT(*) as c FROM consultations WHERE user_id=?', [req.user.id]).c;
    const totalDrafts   = queryOne('SELECT COUNT(*) as c FROM fir_drafts WHERE user_id=?', [req.user.id]).c;
    const totalQuizzes  = queryOne('SELECT COUNT(*) as c FROM quiz_results WHERE user_id=?', [req.user.id]).c;
    const avgScore      = queryOne('SELECT AVG(percentage) as avg FROM quiz_results WHERE user_id=?', [req.user.id]).avg;
    const totalAlerts   = queryOne('SELECT COUNT(*) as c FROM risk_alerts WHERE user_id=?', [req.user.id]).c;
    res.json({ success: true, stats: {
      totalUsers, myConsultations: totalConsults, myFIRDrafts: totalDrafts,
      myQuizzesTaken: totalQuizzes, myAvgQuizScore: avgScore ? Math.round(avgScore) : 0, myRiskAlerts: totalAlerts
    }});
  });

  app.listen(PORT, () => {
    console.log(`\nE-Legal Advisor Backend → http://localhost:${PORT}`);
    console.log(`Database: elegal.db  |  Demo: demo@example.com / demo123\n`);
  });
}

initDatabase();
