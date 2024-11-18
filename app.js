if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const dataBase = require("./database.json")

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json(dataBase)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
