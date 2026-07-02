const express = require('express');
const router = express.Router();
const dataModel = require '../models/index';

router.get('/', (req, res) => {
  res.render('index', dataModel);
});

module.exports = router;