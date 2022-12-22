import express from 'express';
const app = express()
const port = 3000

app.get('/colors', (req, res) => {
  res.json([
    { "color": "green", "code": "#00ff00" },
    { "color": "red", "code": "#ff0000" },
    { "color": "blue", "code": "#0000ff" }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})