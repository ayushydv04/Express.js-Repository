const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))


// Now Chaining all requests
app.get('/', (req, res) => {
    console.log("Its a Get Request")
    res.send('Hello Get!')
}).post('/', (req, res) => {
    console.log("Its a Post Request")
    res.send('Hello Post!')
}).put('/', (req, res) => {
    console.log("Its a Put Request")
    res.send('Hello Put!')
}).delete('/', (req, res) => {
    console.log("Its a Delete Request")
    res.send('Hello Delete!')
})

app.get('/index', (req, res) => {
    console.log("Its a Index.html get Request")
    // res.send('Hello Index.html!')   //use this when you want to give text write res.send
    res.sendFile('templates/index.html', { root: __dirname }) //when you want to give text write res.send
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

// Making requests individually
// app.get('/', (req, res) => {
//     console.log("Its a Get Request")
//     res.send('Hello Get!')
// })

// app.post('/', (req, res) => {
//     console.log("Its a Post Request")
//     res.send('Hello Post!')
// })

// app.put('/', (req, res) => {
//     console.log("Its a Put Request")
//     res.send('Hello Put!')
// })

// app.delete('/', (req, res) => {
//     console.log("Its a Delete Request")
//     res.send('Hello Delete!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})