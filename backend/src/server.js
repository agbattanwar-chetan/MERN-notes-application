import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import notesRoutes from "./routes/notesRoutes.js"
import connectDB from "./config/db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// middleware
// middleware for cors
// for every domain
// app.use(cors())

// for specific domain
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json()) // This is required to parse req.body

// custom middleware
// app.use((req, res, next)=>{
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`)
//     next()
// })

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server started on PORT:${PORT}`);
    })
})
