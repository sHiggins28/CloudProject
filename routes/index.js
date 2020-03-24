var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/scriptDb');
var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
  name: String,
  age: String,
  email: String,
  phone: String,
  sex: String,
  city: String,
  cars: String,
  nature: String,
  movies: String,
  music: String,
  books: String,
  sport: String,
  travelling: String,
  gaming: String,
  flowers: String,
  dance: String,
  technology: String,
  outdoor_activities: String
});

var userInfo = mongoose.model('UserInfos', userInfoSchema);

router.get('/', function(req, res, next) {
        res.render('intro', {title: "Welcome"});
});

router.post('/userinfo', function (req, res, next) {

  var data = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    sex: req.body.sex,
    city: req.body.city,
    cars: req.body.cars,
    nature: req.body.nature,
    movies: req.body.movies,
    music: req.body.music,
    books: req.body.books,
    sport: req.body.sport,
    travelling: req.body.travelling,
    gaming: req.body.gaming,
    flowers: req.body.flowers,
    dance: req.body.dance,
    technology: req.body.technology,
    outdoor_activities: req.body.outdoor_activities
  }
  console.log(req.body);
  console.log(data);

  const userInfoModel = new userInfo(data);
  userInfoModel.save();

  userInfo.find({$and: [{city:{$eq:req.body.city}},
                {sport:{$eq:req.body.sport}},
                {movies:{$eq:req.body.movies}},
                {cars:{$eq:req.body.cars}},
                {nature:{$eq:req.body.nature}},
                {music:{$eq:req.body.music}},
                {books:{$eq:req.body.books}},
                {travelling:{$eq:req.body.travelling}},
                {gaming:{$eq:req.body.gaming}},
                {flowers:{$eq:req.body.flowers}},
                {dance:{$eq:req.body.dance}},
                {technology:{$eq:req.body.technology}},
                {outdoor_activities:{$eq:req.body.outdoor_activities}}
                ]})
      .then(function(doc) {
        console.log("Got as far as here, array length is: " + doc.length);
        res.render('result1', {title: "Interest Form", items: doc});
      });
});

router.get('/userform',  function(req, res, next) {
      res.render('userform');
});

module.exports = router;
