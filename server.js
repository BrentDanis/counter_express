var express = require("express");
var session = require("express-session");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'codingdojorocks'}));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    if (!req.session.counter){
        req.session.counter = 1;
    }
    else{
        req.session.counter++;
    }
    console.log(req.session.counter);
    res.render("index", {counter: req.session.counter});
});

app.post("/", function (req, res){
    req.session.counter += 2;
    res.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});





// ************ attempt one below ***********

// require express
// var express = require("express");
// path module -- try to figure out where and why we use thiscopy
// var path = require("path");
//bringing in express.session
// var express = require("express-session");
// var bodyParser = require('body-parser');
// create the express app
// var app = express();

//session code to use
// app.use(session({
//     secret: 'IamAsecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }))

// use it!
// app.use(bodyParser.urlencoded({ extended: true }));
// static content
// app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// root route to render the index.ejs view
// app.get('/', function(req, res) {
//  res.render("index");
// })
// post route for adding a user
// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
//  res.redirect('/');
// })
// tell the express app to listen on port 8000
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// });
