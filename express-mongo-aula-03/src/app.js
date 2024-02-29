import express from 'express'
import connectionDatabase from './config/db.js'
import bookRouter from './routes/book.js'

const app = express()

app.use(express.json())

const db = await connectionDatabase()

db.once('open',() => {
  console.log("connection database ok!")
})

db.on('error',(err) => {
  console.error({ message: err })
})

app.use(bookRouter)

export default app