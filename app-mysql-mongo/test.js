const Sequelize = require('sequelize');
const sequelize = new Sequelize('meubanco','carlos','C30s20#15',{
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
    descricao: "Twitter",
    login: "carlosantonino.cs@gmail.com",
    senha: "xxxxx"
})

Usuario.sync({force: true})

// Testa conexao com o banco
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesos");
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })

