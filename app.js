require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express ()


app.use(cors())

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`tu app esta lista por http://localhost: ${port}`)
})