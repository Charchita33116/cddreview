const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chand1807#',
  database: 'kl_university' 
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

module.exports = db;
