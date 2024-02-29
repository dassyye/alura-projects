import bookModel from '../models/book.js'

import { randomUUID } from 'node:crypto'

class BookController {
  static async get(req, res) {
    try {
      const books = await bookModel.find()
    
      return res.status(200).json(books)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params
      const book = await bookModel.findById(id)
    
      if(!book) {
        throw new Error("book not found")
      }
    
      return res.status(200).json(book)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async post(req, res) {
    try {
      const { title, publishing_company, price, pages } = req.body

      if(!title) {
        throw new Error()
      }

      const book = await bookModel.create({ title, publishing_company, price, pages })

      return res.status(201).json({ message: 'created', book })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  static async put(req, res) {
    try {
      const { id } = req.params
      const { title, publishing_company, price, pages } = req.body

      await bookModel.findByIdAndUpdate(id, {
        title, 
        publishing_company, 
        price, 
        pages 
      })
    
      res.status(200).json({ message: 'updated' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }6

  static async delete(req, res) {
    try {
      const { id } = req.params

      await bookModel.findByIdAndDelete(id)
    
      res.status(204).json({ message: 'deleted' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}

export default BookController