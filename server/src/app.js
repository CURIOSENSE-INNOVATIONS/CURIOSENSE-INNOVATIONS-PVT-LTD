import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    headers: "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers",
    allowedHeaders: '*',
    credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//Backend Routes
import userRouter from "./routes/user.routes.js"

// Routes declaration
app.use("/api/v1/users", userRouter)


export { app }