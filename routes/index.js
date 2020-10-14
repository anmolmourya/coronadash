var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const bodyparser = require('body-parser');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const responseworld = await fetch('https://api.covid19api.com/summary');
  var dataworld  =await responseworld.json();
  var countrylist = dataworld.Countries;

  const responseindia = await fetch('https://api.covid19india.org/data.json');
  var dataindia =await responseindia.json();
  var indialist = dataindia.statewise;


  console.log(countrylist)
  
  res.render('index', { title: 'Express', world :countrylist, india: indialist });
});

module.exports = router;
