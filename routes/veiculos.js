"use strict";
const express = require("express");
const path = require("path");
const viewpath = path.join(__dirname,"../views")
var router = require('express').Router()

router.get('/veiculos', ( req, res ) => 
{  
    res.render(viewpath+'/veiculos/veiculos')
})

module.exports = router