const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact Us!')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
})

app.get('/blog/:slug', (req, res) => {
    console.log(req)
    res.send(`hello ${req.params.slug}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello JS!')
// })

// app.get('/blog/intro-to-express', (req, res) => {
//     res.send('Hello Express!')
// })

// app.get('/blog/intro-to-node', (req, res) => {
//     res.send('Hello Node!')
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})