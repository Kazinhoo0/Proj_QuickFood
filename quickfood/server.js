const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')



app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'DELETE', 'PUT'],
  credentials: true,

}))

// conexão com o banco de dados sqlite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

db.run(`
    
     CREATE TABLE IF NOT EXISTS usuários (
      id integer primary key autoincrement,
      nomecompleto text,
      email text unique,
      senha text,
      pais text ,
      cidade text

     )
    
`);


// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/Login', (req, res) => {
  const { email, senha } = req.body;

  console.log(
    'Novo login realizado pelo ', 'usuario:', email
  )


  const query = `SELECT ID FROM usuários where email = ? AND senha = ?`;

  db.get(query, [email, senha], function (err, row) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }


    if (row) {
      res.status(200).json({ success: true, id: row.id, message: 'Login Bem-sucedido' });
    } else {
      res.status(400).json({ success: false, message: 'Tentativa de login não autorizada' });
    }

  });

});



app.post('http://localhost:3000/Criarconta', (req, res) => {
  const { nomecompleto, email, senha, pais, cidade } = req.body;

  // Verifique se todos os campos estão presentes
  if (!nomecompleto || !email || !senha || !pais || !cidade) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Log para verificar se os dados estão chegando corretamente
  console.log('Dados recebidos:', { nomecompleto, email, senha, cidade, pais });

  // Inserir dados no banco de dados SQLite
  const query = `INSERT INTO usuários (nomecompleto, email, senha, pais, cidade) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [nomecompleto, email, senha, pais, cidade], function (err) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.status(201).json({ id: this.lastID });
  });
});




// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
});
