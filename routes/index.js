//This file directs information to webpages or users to webpages

const express = require('express')
const router = express.Router() //router figures out what code to run in response to a request.
//typically based on the URL, and the method,, GET, POST, ...

const calculation = (require('../model/bmi_calculation'))


//exoress documentation always uses the shorthand 'req' and 'res'
//request, respond, next (pass along to something else)

//take handlebars file + data and send it to client after converting to html
//responds to get request to home page. This function below is called. Res generates response
router.get('/', function(req, res, next) {
    // name of handlebars file - name of a template, optional object with data for template
    res.render('index', {
        title: 'Body Mass Index Calculator',
        author: 'Riley'
    })
}) //get request to the home page. forward slash is a home page

router.get('/bmi-form', function(req, res, next) {
    res.render('calculate_bmi',{
        title: 'Body Mass Index Calculator'
    })
})

router.get('/calculate', function(req, res, next){
    const formData = req.query
    console.log(formData)
    const height = formData.heightInput
    const weight = formData.weightInput

    const bmi = calculation(height, weight)
    res.render('bmi_display', {
        title: 'Body Mass Index Calculator',
        bmi: bmi
    })
})

module.exports = router