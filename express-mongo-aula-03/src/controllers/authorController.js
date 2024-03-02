import { authorModel } from '../models/author.js'

class authorController {
  static async get(req, res) {
    try {
      const authors = await authorModel.find()
    
      return res.status(200).json(authors)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params
      const author = await authorModel.findById(id)
    
      if(!author) {
        throw new Error("book not found")
      }
    
      return res.status(200).json(author)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  static async post(req, res) {
    try {
      const { name, description } = req.body
      if(!name) {
        throw new Error()
      }

      const author = await authorModel.create({ name, description })

      return res.status(201).json({ message: 'created', author })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  static async put(req, res) {
    try {
      const { id } = req.params
      const { name, description } = req.body

      await authorModel.findByIdAndUpdate(id, { name, description })
    
      res.status(200).json({ message: 'updated' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }6

  static async delete(req, res) {
    try {
      const { id } = req.params

      await authorModel.findByIdAndDelete(id)
    
      res.status(204).json({ message: 'deleted' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}

export default authorController