import mongoose from "mongoose"
import 'dotenv/config'

async function connectionDatabase() {
  mongoose.connect(process.env.DATABASE)
  return mongoose.connection
}

export default connectionDatabase