import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI


app.use(express.json())
app.use(cors())


//connect to DB using env variables
mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log("MongoDB Connection Error", err))

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))
