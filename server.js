"use strict"
// Injeção de dependencias 
const createError = require("http-errors");
const express = require('express')
const app = express()
const path = require("path");
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
require('dotenv').config()

// Rota de views e pastas do projeto
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Declara rotas 
var dashboardRouter = require("./routes/dashboard");
var veiculosRouter = require("./routes/veiculos");

// Define o uso dos enderecos e variaveis de rotas
app.use("/dashboard", dashboardRouter);
app.use("/veiculos", veiculosRouter);

// Redireciona a index pra dashboard
app.get('/', (req, res) => {
    res.redirect("/dashboard/dashboard")
})
  
app.listen(port, err => {
    console.log(`Listening on port ${port}`)
})
