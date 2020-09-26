const express = require('express');
const router = express.Router({ mergeParams: true });
const { payMoney } = require('../Controllers/Payment');

router.route('/payment').post(payMoney);

module.exports = router;