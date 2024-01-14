const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const birds = require('./routes/birds')

// app.use(express.static("public"))


// ...

app.use('/birds', birds)

// Middleware 1
app.use((req, res, next) =>{
    console.log(req.header)
    req.harry = "I am Harry"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Middleware 1")
    next()
})

// Middleware 2
app.use((req, res, next) =>{
    console.log('M2')
    next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.harry)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})