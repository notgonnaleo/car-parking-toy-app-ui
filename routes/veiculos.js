"use strict";
const express = require("express");
const path = require("path");
const axios = require("axios");
const https = require('https');
const viewpath = path.join(__dirname,"../views")
var router = require('express').Router()
const veiculosController = require('../controllers/veiculosController');

router.get('/ListagemVeiculos', async ( req, res, next ) => 
{
    try
    {
        var Veiculos = await veiculosController.ListagemVeiculos(req, res);
        var Modelos = await veiculosController.ListagemModelos(req, res);
        var Cores = await veiculosController.ListagemCores(req, res);
        
        var tableVeiculos = [
                            "Número da Placa",
                            "Modelo do Veículo",
                            "Cor do Veículo",
                            "Data do Cadastro",
                            "Quilometragem"
                            ]

        res.render(viewpath+'/Veiculos/veiculos', {
            ListagemModelos: Modelos,
            ListagemCores: Cores,
            ListagemVeiculos: Veiculos,
            tableVeiculos: tableVeiculos
        });
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router