// server/index.js

const express = require("express")
const fs = require('fs')

const PORT = process.env.PORT || 3001

const app = express()

app.get("/api", (_, res) => {
    res.json({ message: "Hello! Request received!"})
})

app.get("/api/exercises", (_, res) => {
    const exercises = JSON.parse(fs.readFileSync("server/exercises.json"))
    console.log("sending exercises", exercises)
    res.json(exercises)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
