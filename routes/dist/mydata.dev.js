"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('mydata', {
    title: 'Lakshmi Sowjanya Kalyanam'
  });
});
module.exports = router;
//# sourceMappingURL=mydata.dev.js.map
