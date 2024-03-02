import mongoose from "mongoose";
import { authorSchema } from '../models/author.js'

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  title: { type: String, required: true },
  publishing_company: { type: String },
  price: { type: Number },
  pages: { type: Number },
  author: authorSchema
}, { versionKey: false })

const bookModel = mongoose.model('books', bookSchema)

export default bookModel