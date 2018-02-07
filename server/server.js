const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.get('/api', (req, res) => {
  res.json({cheese: 2})
})

app.use(express.static('ui/build'))

const port = process.env.PORT || 8020
app.listen(port, err => {
  if (err) console.error(`Can not listen on port ${port}`)
  else console.log(`Server running, the magic happens on port ${port}`)
})