var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test' function(req, res, next){
    res.send('ini pesan post');
});

module.exports = router;
