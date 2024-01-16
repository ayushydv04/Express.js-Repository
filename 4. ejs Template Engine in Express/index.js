// How to ejs with express
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express



const { Template } = require('ejs')
const express = require('express')
const app = express()
const port = 3000

// This means i want to use ejs Template engine
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 87]
    res.render("index", { siteName: siteName, searchText: searchText, arr})

    //{blogTitle: blogTitle, blogContent: blogContent} 
    /* here i have passed both the variables blogTitle, blogContent as an object we can also change its name here but i prefered to keep is unchanced */

    // res.render --> render a view template
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when"
    let blogContent = "Its a very good brand"
    res.render("blogPost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})