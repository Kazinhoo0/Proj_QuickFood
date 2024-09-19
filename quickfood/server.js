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


const secretkey = 'K2$%542!!'


// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/Login', (req, res) => {
  const { email, senha } = req.body;


  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  console.log(
    'Nova tentativa de login feito por ', 'email:', email
  )


  const query = `SELECT id, senha FROM users WHERE email = ?`;

  db.get(query, [email], function (err, row) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }


    if (row) {

      const isPasswordValid = bcrypt.compareSync(senha, row.senha);

      if (isPasswordValid) {

      const token = jwt.sign({ id: row.id, email }, secretkey, { expiresIn: '1h' });
      res.status(200).json({ success: true, id: row.id, token, message: 'Login bem-sucedido' });
    } else {
      res.status(400).json({ success: false, message: 'Senha incorreta' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Email não encontrado' });
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

  //console para visualizar a senha criptografada
  console.log('senha criptografada: ', hashedPassword)


  // Log para verificar se os dados estão chegando corretamente
  console.log('Dados recebidos:', { nomecompleto, senha, cidade, genero, email });


 const query = `SELECT email FROM users WHERE email = ?`

  db.get(query, [email], function (err, row) {
    if (err) {
      console.error("Erro ao verificar o email:", err.message);
      return res.status(500).json({ error: 'Erro ao verificar o email.' });
    }

    // Verifique se o email já existe
    if (row) {
      return res.status(400).json({ error: 'Já existe uma conta criada com este email.' });
    }

    // Se o email não existir, insira o novo usuário
    db.run(
      `INSERT INTO users (nomecompleto, senha, cidade, genero, email) VALUES (?, ?, ?, ?, ?)`,
      [nomecompleto, hashedPassword, cidade, genero, email],
      function (err) {
        if (err) {
          console.error('Erro ao inserir no banco de dados:', err.message);
          return res.status(500).json({ error: 'Erro ao registrar o usuário.' });
        }

        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
      }
    );
  });
});




// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
})
