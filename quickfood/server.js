const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')
const cors = require('cors')



const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
      console.log('Conectado ao banco de dados SQLite.');
    }
  });
  
  db.run(`
  CREATE TABLE if not exists lembretes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomelembrete TEXT NOT NULL,
    categoria TEXT NOT NULL,
    ischecked TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES usuarios(id)
  );
    
  `);