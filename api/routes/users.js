var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mayara', function(req, res, next) {
  res.send("Testando");
});
module.exports = router;
