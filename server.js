//This file which is referenced in package.json is how to application gets started

const express = require('express')//imports express library
const path = require('path')//connects references of locations to find locations
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index') //calls in index.js content and it is required

const app = express() //this line creates the web application server

app.use(bodyParser.urlencoded({ extended: false }))

const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))
//The body parser is aparently important when applying css styles


//The line directly below tells the app where the views (HTML files or templates are.
app.set('views', path.join(__dirname, 'views'))//after the comma is a reference to the views folder. It creates a path.
app.set('view engine', 'hbs')// this tells the app to use handlebars as the viewing engine

app.use('/', indexRouter)//all the requests to app are passed to indexRouter and indexRouter finds requests and sends responses

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})//'process.env.PORT' means the port is decided by the web application server host the port is 3000

