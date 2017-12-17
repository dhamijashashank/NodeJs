var express = require('express');
var logger = require('morgan');

//create instance of express app
var app = express()

var bodyParser = require('body-parser');

// we want to server js and html in ejs
//ejs stand for embedded java script
app.set('view engine' , 'ejs')

//we want to send all images , css and other statics files in views folder
app.use(express.static('views'))

//__dirname : Name of the directory that the currently executing scripts reside in.
app.set('views', __dirname + '/views')

// Give the server access to user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(logger('dev'))

var port = process.env.PORT || 3000

app.listen(port , function(){
    console.log('App is running on port '+ port);
})

// res.render is used to render home.ejs page which is reside in views folder
app.get('/', function (req , res) {
   // res.send('hare krishna this is home page');
    res.render('home.ejs')
})

// to handle post request
app.post('/', function (req , res) {
    var itemValue = req.body.item;
    res.render('result.ejs', {data : itemValue})
})