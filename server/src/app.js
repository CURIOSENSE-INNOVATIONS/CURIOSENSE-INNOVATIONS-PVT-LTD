import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //For accept json with limit
app.use(express.urlencoded({extended: true, limit: "16kb"})) //For accept URL data
app.use(express.static("public")) //For store Img, Pdf, etc temp
app.use(cookieParser())

export default {app}