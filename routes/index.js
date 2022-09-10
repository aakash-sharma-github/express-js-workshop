var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mylogin'
});
connection.connect(function(err){
    if (!err) {
      console.log("Connected to Database");
    }
    else {
      console.log("Failed to connect to Database");
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/game', function(req, res, next) {
  res.render('game');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});


router.post('/processing', function(req, res, next) {
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = "Record Added";
  // var c = parseInt(a) + parseInt(b);
  // var d = parseInt(a) - parseInt(b);
  // var e = parseInt(a) * parseInt(b);
  // var f = parseInt(a) / parseInt(b);
  // console.log(c);
  // res.render('ans', {mya:a, myb:b, myc:c, myd:d, mye:e, myf:f});
connection.query("Insert into tbl_student (st_name,st_gender) values (?,?)", [a,b],
function(err,result,field){
  res.render('ans', {mya:a, myb:b, myc:c});
});
});

module.exports = router;
