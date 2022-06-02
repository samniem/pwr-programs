// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (_, res) => {
    res.json({ message: "Hello! Request received!"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
