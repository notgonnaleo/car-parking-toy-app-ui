"use strict";
const express = require("express");
const path = require("path");
const axios = require("axios");
const viewpath = path.join(__dirname,"../views")
var router = require('express').Router()

router.get('/Home', ( req, res ) => 
{  
    res.render(viewpath+'/Dashboard/Home')
})

module.exports = router