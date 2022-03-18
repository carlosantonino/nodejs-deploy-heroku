const Sequelize = require('sequelize');
const sequelize = new Sequelize('meubanco','carlos','',{
    host:"localhost",
    dialect:"mysql"
});

// const Produto = sequelize.define('produtos',{
//     descricao: {
//         type: Sequelize.STRING,
//     },
//     valor: {
//         type: Sequelize.DOUBLE
//     }
// })



const Usuario = sequelize.define('usuarios',{
    descricao: {
        type: Sequelize.STRING
    },

    login: {
        type: Sequelize.STRING
    },

    senha: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    descricao: "gmail",
    login: "carlosantonino.cs@gmail.com",
    senha: "ssssss"
})

// Usuario.sync({force: true})

// Testa conexao com o banco
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesos");
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })

