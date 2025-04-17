const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Signup
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err) => {
    if (err) return res.status(500).json({ error: 'Signup failed' });
    res.json({ message: 'User registered successfully' });
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ error: 'Login failed' });
    if (result.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

// Exam Registration (Updated with success flag)
app.post('/register-exam', (req, res) => {
  const { studentName, course } = req.body;
  const sql = 'INSERT INTO exam_registrations (student_name, course) VALUES (?, ?)';
  db.query(sql, [studentName, course], (err) => {
    if (err) {
      console.error('Exam registration failed:', err);
      return res.status(500).json({ success: false, message: 'Exam registration failed' });
    }
    res.status(200).json({ success: true, message: 'Exam registration successful' });
  });
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
