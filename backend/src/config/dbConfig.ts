import mongoose from 'mongoose'
import { config } from 'dotenv'
config()

const url = process.env.URL || 'mongodb+srv://csronly02:Chirag%40123@mycluster.ptfyhk4.mongodb.net//testDb'

export default mongoose
  .connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err))
