var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/scriptDb');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  Name: String,
  Script: String
});

var UserData = mongoose.model('script', userDataSchema);

router.get('/', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        console.log("Got as far as here, array length is: " + doc.length);
        res.render('index', {title: "My Page", items: doc});
      });
});


var userInfoSchema = new Schema({
  name: String,
  age: String,
  email: String,
  phone: String,
  sex: String,
  city: String
});

var userInfo = mongoose.model('UserInfos', userInfoSchema);

router.post('/userinfo', function (req, res, next) {

  var data = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    sex: req.body.sex,
    city: req.body.city
  }
  console.log(req.body);
  console.log(data);

  const userInfoModel = new userInfo(data);
  userInfoModel.save();
  res.render('index');
});

router.get('/userinfo',  function(req, res, next) {
  userInfo.find()
      .then(function(doc) {
        console.log("Got as far as here, array length is: " + doc.length);
        res.render('index', {title: "My Page", items: doc});
      });
});

router.get('/userform',  function(req, res, next) {
      res.render('userform');
});


module.exports = router;
