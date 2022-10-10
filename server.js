"use strict"
// Injeção de dependencias 
const createError = require("http-errors");
const express = require('express')
const app = express()
const path = require("path");
const axios = require("axios");
const https = require('https');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
require('dotenv').config()

// Rota de views e pastas do projeto
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
  });

// Declara rotas 
var dashboardRouter = require("./routes/dashboard");
var veiculosRouter = require("./routes/veiculos");

// Define o uso dos enderecos e variaveis de rotas
app.use("/Dashboard", dashboardRouter);
app.use("/Veiculos", veiculosRouter);

// Redireciona a index pra dashboard
app.get('/', (req, res) => {
    res.redirect("/Dashboard/Home")
})
  
app.listen(port, err => {
    console.log(`Listening on port ${port}`)
})
