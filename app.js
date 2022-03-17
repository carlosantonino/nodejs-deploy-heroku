const express = require('express');
const app = express();

// Abaixo temos uma rota renderizando arquivo html ndrend

app.get("/", function(req, res){
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/pages/sobre.html");
});

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/pages/contato.html");
});


app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/pages/blog.html");
});

// Renderizando comandos recebendo parametros no browser ndrp 

app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1>Olá "+req.params.nome+" sua profissão é " +req.params.cargo+"</h1>");
});

// Cria seu servidor  ndlisten


app.listen(8080,function(){
    console.log('Servidor rodando na porta 8080')
});