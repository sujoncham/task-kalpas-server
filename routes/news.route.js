const express = require('express');
const { createNews, deleteNews, getNewsDetail, getAllNews } = require('../controllers/news.controller');
const newsRouter = express.Router()

newsRouter.get('/', getAllNews)
newsRouter.post('/createNews', createNews)
newsRouter.get('/:id', getNewsDetail)
newsRouter.delete('/:id', deleteNews)


module.exports = newsRouter;