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

        var tableVeiculos = ["id_veiculo",
                            "data_cadastro",
                            "id_placa",
                            "id_cor",
                            "km",
                            "id_modelo"]

        res.render(viewpath+'/Veiculos/veiculos', {
            ListagemVeiculos: Veiculos,
            tableVeiculos: tableVeiculos
        });
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router