const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
// const handlebars = requere('express-handlebars');
// const Sequelize = require('sequelize');


// Config
    // Template Engine
        // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        // app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySql
    // const sequelize = new Sequelize('meubanco','carlos','',{
    //     host:"localhost",
    //     dialect:"mysql"
    // }); 
    
    app.get("/", function (req, res) {
        res.send("Olá world!");
    })

app.listen(port, function(){
    console.info("Servidor Rodando na url http:localhost:3000");
});