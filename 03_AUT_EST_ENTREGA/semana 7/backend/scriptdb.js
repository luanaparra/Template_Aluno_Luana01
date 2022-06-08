const express = require("express");
const app = express();
app.use(express.static("../frontend/"));
app.use(express.json());
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "Database/curriculoluana.db";
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS "formacao"(
            id INTEGER NOT NULL,
            institucao TEXT NOT NULL,
            curso TEXT NOT NULL,
            periodo TEXT NOT NULL,
            descricao TEXT NOT NULL,
            UNIQUE(titulo),
            PRIMARY KEY(id)
        );
    
        INSERT OR IGNORE INTO formacao("nome","curso","periodo","descricao") VALUES("Unesp - Universidade Estadual de São Paulo","Engenharia Eletrônica e de Telecomunicações","2021 (1ºano completo) | Graduação Interrompida"," ");
        INSERT OR IGNORE INTO formacao("nome","curso","periodo","descricao") VALUES("Inteli - Instituto de Tecnologia e Liderança","Engenharia da Computação","2022 até o momento"," ");
    `)
}

module.exports = Database.open(__dirname + '/curriculoluana.db').then(execute)

// ENDPOINTS - CRUD

//Create
app.post("/formacao/create", (request, response) => {
    let db = new sqlite3.Database(DBPATH);
    let sql = "INSERT INTO Formacao (instituicao, curso, periodo, descricao) VALUES(?,?,?,?);";
  
    let params = [];
  
    // add elements to the params list
    params.push(request.body.instituicao);
    params.push(request.body.curso);
    params.push(request.body.periodo);
    params.push(request.body.descricao);
  
    db.all(sql, params, (err, rows) => {
      response.statusCode = 200;
      response.json(rows);
    });
    db.close();
});

// Read
app.get("/formacao", (request, response) => {
    let db = new sqlite3.Database(DBPATH);
    let sql = "SELECT * FROM Formacao";

    db.all(sql, [], (err, rows) => {
      response.statusCode = 200;
      response.json({ idFormacao: rows });
    });
    db.close();
});

//Update
//nada, pois não vai ter atualização desses dados
  
// Delete
app.post("/eixo/delete", (request, response) => {
    let db = new sqlite3.Database(DBPATH);
    let sql = "DELETE FROM Formacao WHERE id = ?;";

    let params = [];

    params.push(request.body.idFormacao);

    db.all(sql, params, (err, rows) => {
        response.statusCode = 200;
        response.json(rows);
    });
    db.close();
});


  // starts the server
    app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });


  
  




  