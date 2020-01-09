const express = require('express')

const app = express()

app.use('/api', (req, res, next) => {
  console.log(req)
  console.log(`A new request was received at ${new Date().toLocaleString()}`)
  res.send(`Thanks for hitting my API`)
})

const port = 8080;

app.listen(port, () => {
  console.log(`===================================\n Server is listening on port ${port}.\n===================================`)
})