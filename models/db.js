const { Sequelize } = require('sequelize'); // importa a classe Sequelize
const sequelize = new Sequelize(
    "cadastro_stack",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then((function(){
    console.log("BD conectado");
})).catch((function(errro){
    console.log("Erro ao conectar BD " + erro);
}));

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};