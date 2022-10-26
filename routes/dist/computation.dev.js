"use strict";

var express = require('express');

var router = express.Router();
var x = Math.random();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('computation', {
    title: 'Computation Results',
    cos_result: 'Math.cos() applied to ' + x + 'is' + Math.cos(x),
    asin_result: 'Math.sin() applied to ' + x + 'is' + Math.asin(x),
    asinh_result: 'Math.sinh() applied to ' + x + 'is' + Math.asinh(x)
  });
});
module.exports = router;
//# sourceMappingURL=computation.dev.js.map
