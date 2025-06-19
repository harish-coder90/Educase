import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
import cors from 'cors'
import path from 'path'
import userRoute from './routes/userRoutes.js'
import profileRoute from './routes/profileRoutes.js'
import { fileURLToPath } from "url";

dotenv.config()

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());                                     
app.use(express.urlencoded({ extended: true }));       
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

app.use('/api/educase', userRoute)
app.use('/api/educase', profileRoute)
dbConnection()
app.listen(process.env.PORT, ()=>{
    console.log('server is listening on port 400')
}) 