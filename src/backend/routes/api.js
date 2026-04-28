const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/calcController');
const { validateExpression } = require('../middlewares/validator');

router.post('/calculate', validateExpression, calculate);

module.exports = router;
