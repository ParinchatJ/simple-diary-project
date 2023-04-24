const express = require('express')
const homeRoute = express.Router()

const homeControllers = require('../controllers/homeControllers')

// (1) pre myspace form
homeRoute.get('/', homeControllers.getQuestionPre)
homeRoute.post('/', homeControllers.postQuestionPre)

// (2) myspace
homeRoute.get('/myspace', homeControllers.getMyspace)

module.exports = homeRoute