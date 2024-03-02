import bookModel from '../models/book.js'
import { authorModel } from '../models/author.js'

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
    const { title, publishing_company, price, pages, author } = req.body

    try {
      const authorFind = await authorModel.findById(author)

      if(!title || !authorFind) {
        throw new Error()
      }

      const book = await bookModel.create({ title, publishing_company, price, pages, author: { ...authorFind._doc } })

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
  }

  static async delete(req, res) {
    try {
      const { id } = req.params

      await bookModel.findByIdAndDelete(id)
    
      return res.status(204).json({ message: 'deleted' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  static async searchPublishingCompany(req, res) {
    const company = req.query.company
    try {
      const book = await bookModel.find({ publishing_company: company })

      return res.status(200).json(book)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}

export default BookController