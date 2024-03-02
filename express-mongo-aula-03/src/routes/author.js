import express from 'express'

import authorController from '../controllers/authorController.js'

const authorRouter = express.Router()

authorRouter.get('/author', authorController.get)

authorRouter.get('/author/:id', authorController.getOne)

authorRouter.post('/author', authorController.post)

authorRouter.put('/author/:id', authorController.put)

authorRouter.delete('/author/:id', authorController.delete)

export default authorRouter