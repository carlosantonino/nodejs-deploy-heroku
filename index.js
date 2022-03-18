const express = require("express");
const app = express();
const handlebars = requere('express-handlebars');
const Sequelize = require('sequelize');


// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize('meubanco','carlos','',{
        host:"localhost",
        dialect:"mysql"
    }); 
    

app.listen(8081, function(){
    console.log("Servidor Rodando na url http:localhost:8081");
});