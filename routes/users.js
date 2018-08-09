var express = require('express');
var router = express.Router();


router.get('/', async (req, res, next) => {
  req.sql("select * from users for json path").into(res);
});

module.exports = router;