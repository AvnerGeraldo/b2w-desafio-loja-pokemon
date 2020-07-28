const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Listening server on port ${port}!`))