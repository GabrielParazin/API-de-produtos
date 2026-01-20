const express = require("express");
const Produtos = require("./models/Produtos");
const app = express();
const bodyParser = require("body-parser")

//Configurar BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(8081, function(){
    console.log("Servidor rodando..")
});



/*body vai pegar a req do corpo*/
app.post("/cadastro", function(req, res){
    Produtos.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(function(){
        res.send("Produto cadastrado com sucesso");
    }).catch(function(erro){
        res.send("Erro ao buscar os dados " + erro);
    })
});


app.get("/", function(req, res){
    Produtos.findAll().then(function(produtos){
        res.send({/*produtos:*/ produtos}); /*diferença*/
    }).catch(function(erro){
        res.send("Erro ao cadastrar esse produto " + erro);
    })
})


app.patch("/atualizar/:id", function(req, res){
    Produtos.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao}, /* pra atualizar precisa de uma condição*/
        {where: {"id": req.params.id}}
    ).then(function(){
        res.send("Produto Atualizado");
    }).catch(function(erro){
        res.send("Erro ao ataulizar " + erro);
    })
});


app.delete("/deletar/:id", function(req, res){
    Produtos.destroy({where: {"id": req.params.id}
    }).then(function(){
        res.send("Produto deletado");
    }).catch(function(erro){
        res.send("Erro ao deletar " + erro);
    })
});

app.get("/:nome", function(req, res){
    Produtos.findAll({where: {"nome": req.params.nome}}
    ).then(function(produto){
        res.send(produto);
        res.send("Consulta realizada com sucesso"); 
    }).catch(function(erro){
        res.send("Não existe " + erro);
    })
})



/*app.get("/", function(req, res){
    res.send("Seja bem-vindo ao nosso site")
});

/*--:..alguma coisa é um parametro*/
/*app.get("/artigos", function(req, res){
    res.send("Todos os artigos")/*
    
    /*if(req.params.id == "1"){
        res.send("1-Como criar aplicativos Android")
    } else if (req.params.id == "2"){
        res.send("2-Como usar o Node.JS")
    } else {
        res.send("Nenhum artigo foi encontrado")   
    }*/
/*});

app.get("/contato", function(req, res){
    res.send("Deixe a sua mensagem")
});*/
