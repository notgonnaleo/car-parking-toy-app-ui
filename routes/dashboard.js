"use strict";
const express = require("express");
const path = require("path");
const viewpath = path.join(__dirname,"../views")
var router = require('express').Router()

router.get('/dashboard', ( req, res ) => 
{  
    res.render(viewpath+'/dashboard/dashboard')
})

module.exports = router