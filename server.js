const express = require('express')
const app = express()
const port = 8080

app.get("/newAccount", (req, res) => {
    res.redirect('/')
})
app.get("/users", (req, res) => {
    res.redirect('/')
})
app.get("/user", (req, res) => {
    res.redirect('/')
})
app.get("/remove", (req, res) => {
    res.redirect('/')
})

app.use('/', express.static('dist'))

app.listen(port, () => {
  console.log(`Express server: React being served from dist folder at http://localhost:${port}`)
})