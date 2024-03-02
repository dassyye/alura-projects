import express from 'express'

import BookController from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.get('/livros', BookController.get)

bookRouter.get('/livros/search', BookController.searchPublishingCompany)

bookRouter.get('/livros/:id', BookController.getOne)

bookRouter.post('/livros', BookController.post)

bookRouter.put('/livros/:id', BookController.put)

bookRouter.delete('/livros/:id', BookController.delete)

export default bookRouter