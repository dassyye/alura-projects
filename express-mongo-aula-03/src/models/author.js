import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  name: { type: String, required: true },
  description: { type: String },
}, { versionKey: false })

const authorModel = mongoose.model('authors', authorSchema)

export { authorModel, authorSchema }