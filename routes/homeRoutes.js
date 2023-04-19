const express = require('express')
const homeRoute = express.Router()

const homeControllers = require('../controllers/homeControllers')

// (1) pre myspace
homeRoute.post('/prequestion', homeControllers.postQuestionPre)

// (2) myspace
homeRoute.get('/myspace', homeControllers.getMyspace)

module.exports = homeRoute