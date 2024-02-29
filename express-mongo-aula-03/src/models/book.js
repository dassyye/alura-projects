import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  title: { type: String, required: true },
  publishing_company: { type: String },
  price: { type: Number },
  pages: { type: Number }
}, { versionKey: false })

const bookModel = mongoose.model('books', bookSchema)

export default bookModel