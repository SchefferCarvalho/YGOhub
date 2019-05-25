const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');


//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'xxxxxxxx',
    database : 'Cup'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

router.get('/td_tipo_carta', (req, res) =>{
    execSQLQuery('SELECT * FROM td_tipo_carta', res);
})

router.get('/tb_carta', (req, res) =>{
    execSQLQuery('SELECT * FROM tb_carta', res);
})

router.get('/tb_deck', (req, res) =>{
  execSQLQuery('SELECT * FROM tb_deck', res);
})

router.get('/tb_usuario', (req, res) =>{
  execSQLQuery('SELECT * FROM tb_usuario', res);
})

router.get('/ta_carta_has_ta_deck', (req, res) =>{
  execSQLQuery('SELECT * FROM ta_carta_has_ta_deck', res);
})

router.post('/tb_usuario', (req, res) => {
  const email = req.body.email_usua;
  const nome = req.body.nme_usua;
  const password = req.body.pwd_usua;
  const nick = req.body.nicknme_usua;

  execSQLQuery(`INSERT INTO tb_usuario(email_usua,nme_usua,pwd_usua,nicknme_usua)VALUES('${email}','${nome}','${password}','${nick}')`, res);
});

