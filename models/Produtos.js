const db = require("./db");
const { DataTypes } = require("sequelize");


const Produto = db.sequelize.define("Produtos",{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}); 

/*Produto.create({
    nome: "Memoria RAM DDR4 8GB",
    preco: 299.99,
    descricao: "Memória DDR4 8GB"
})*/

Produto.sync({force: false})

module.exports = Produto;