import express from 'express'
import cors from 'cors'

const app = express()

// // Middleware
app.use(cors())
app.use(express.json())


// Add the missing /api endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' })
})

app.listen(3000,()=>{
    console.log('server listening on port 3000')
})