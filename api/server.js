const express = require('express')

const app = express()
const port = process.env.PORT || 3080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/recipes', (req, res) => {
    res.json({ message: 'Working!' })
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
