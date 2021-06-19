const express = require('express')

const app = express()
const port = 3080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`)
})
