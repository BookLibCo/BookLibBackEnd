/**
 * Created by zhy on 2017/4/8.
 */
const express = require('express');
const router  = express.Router();

const $ = require('../controllers/controller').message;

router.post('/send.service', (req, res, next) => {
	next()
});
router.post('/list.service', (req, res, next) => {
	next()
});

module.exports = router;
