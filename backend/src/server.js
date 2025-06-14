import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// middleware
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
