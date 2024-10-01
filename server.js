const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./quickfood/src/db');




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
  const { email, senha,} = req.body;


  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  console.log(
    'Nova tentativa de login feito por ', 'email:', email
  )


  const query = `SELECT id, senha, nomecompleto FROM users WHERE email = ?`;

  db.get(query, [email], function (err, row) {
      if (err) {
        console.error('Erro ao inserir no banco de dados:', err.message);
        return res.status(500).json({ error: err.message });
      }


      if (row) {

        const isPasswordValid = bcrypt.compareSync(senha, row.senha);

        if (isPasswordValid) {

          const token = jwt.sign({ id: row.id, email }, secretkey, { expiresIn: '1h' });
          res.status(200).json({
            success: true,
            id: row.id,
            token: token,
            message: 'Login bem-sucedido',
            nomecompleto: row.nomecompleto
          });
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
  // Verifica se todos os campos estão presentes
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
      return res.status(500).json({ sucess: false,error: 'Erro ao verificar o email.' });
    }

    // Verifique se o email já existe
    if (row) {
      return res.status(400).json({ sucess: false,error: 'Já existe uma conta criada com este email.' });
    }

    // Se o email não existir, insira o novo usuário
    db.run(
      `INSERT INTO users (nomecompleto, senha, cidade, genero, email) VALUES (?, ?, ?, ?, ?)`,
      [nomecompleto, hashedPassword, cidade, genero, email],
      function (err) {
        if (err) {
          console.error('Erro ao inserir no banco de dados:', err.message);
          return res.status(500).json({ sucess: false ,error: 'Erro ao registrar o usuário.' });
        }

        res.status(201).json({ sucess : true ,message: 'Usuário registrado com sucesso!' });
      }
    );
  });
});


app.post('/Adicionaritensmenu', (req, res) => {
  const { nomeitem, preco, ingredientes, fotomenu, userid } = req.body;


  if (!nomeitem || !preco || !ingredientes || !fotomenu || !userid) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  console.log(
    'Novo item adicionado', 'nome do item:', nomeitem
  )



  const query = `INSERT INTO comidas (nome, preco, ingredientes, img_url, user_id ) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [nomeitem, preco, ingredientes, fotomenu, userid], function (err, row) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }


    res.status(201).json({
      success: true,
      id: this.lastID, // ID do último item inserido
      message: 'Item adicionado com sucesso'
    });
  });
});




app.post('/gerenciarpratos', (req, res) => {
  const { userid } = req.body;


  if (!userid) {
    return res.status(400).json({message: 'id do usuário é obrigatório'})
  
  }


  const query = `SELECT * FROM comidas WHERE user_id = ?`;

  db.all(query, [userid], function (err, rows) {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }

    // Se houver itens no banco, retorna-os
    if (rows.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Itens encontrados com sucesso',
        items: rows
      });
    } else {
      // Caso não haja itens na tabela
      res.status(404).json({ success: false, message: 'Nenhum item encontrado' });
    }
  });
});




// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
})
