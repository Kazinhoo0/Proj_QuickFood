const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomecompleto TEXT NOT NULL,
    senha TEXT NOT NULL,
    cidade TEXT NOT NULL,
    genero TEXT NOT NULL
  )`);
});

module.exports = db;