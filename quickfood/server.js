const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../quickfood/src/db');




app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'DELETE', 'PUT'],
  credentials: true,

}))

const secret = 'K2$%542!!'

// conexão com o banco de dados sqlite
// const db = new sqlite3.Database('./database.db', (err) => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err.message);
//   } else {
//     console.log('Conectado ao banco de dados SQLite.');
//   }
// });

// db.run(`

//     DROP TABLE usuários

// `);


// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/Login', (req, res) => {
  const { email, senha } = req.body;


  if (!email && !senha) {
    console.log('nome e senha são obrigatorios')
  }

  console.log(
    'Novo login realizado pelo ', 'usuario:', email
  )


  const query = `SELECT ID FROM users where email = ? AND senha = ?`;

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



app.post('/Criarconta', (req, res) => {
  const { nomecompleto, senha, cidade, genero, email } = req.body;

  // Verifique se todos os campos estão presentes
  if (!nomecompleto || !senha || !cidade || !genero || !email) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Criptografar a senha inserida pelo usuário
  const hashedPassword = bcrypt.hashSync(senha, 10);

  console.log('senha criptografada: ', hashedPassword)


  // Log para verificar se os dados estão chegando corretamente
  console.log('Dados recebidos:', { nomecompleto, senha, cidade, genero, email });

  // Inserir dados no banco de dados SQLite
  db.run(`INSERT INTO users (nomecompleto, senha, cidade, genero, email) VALUES (?, ?, ?, ?, ?)`,
    [nomecompleto, hashedPassword, cidade, genero, email],
    function (err) {
      if (err) {
        res.status(500).json({ message: 'Erro ao registrar o usuário.' });
        console.error('erro ai inserir no banco de dados' + err)
      }
      res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    });
});




// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
})
