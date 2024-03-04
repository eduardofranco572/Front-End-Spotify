const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysqlConnection = require('./db.js');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'server', 'upload')));

// Rota para obter dados de músicas
app.get('/musicas', (req, res) => {
  const query = 'SELECT * FROM musicas';
  
  mysqlConnection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter dados de músicas: ', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
    console.log('Dados de músicas obtidos com sucesso:', results);
    res.json(results);
  });
});

app.get('/playlist', (req, res) => {
  const query = 'SELECT * FROM playlist';
  
  mysqlConnection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter dados da playlist: ', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
    console.log('Dados da playlist obtidos com sucesso:', results);
    res.json(results);
  });
});

app.get('/salvos', (req, res) => {
  const query = 'SELECT * FROM salvos';
  
  mysqlConnection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter dados dos salvos: ', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
    console.log('Dados dos salvos obtidos com sucesso:', results);
    res.json(results);
  });
});

  

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
