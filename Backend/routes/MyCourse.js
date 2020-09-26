const express = require('express');
const router = express.Router({ mergeParams: true });
const { admin_access, GetUser } = require('../middleware/auth');
const { Enroll, MyCourse } = require('../Controllers/myCourse');

router.route('/enroll/:course_id').post(GetUser, Enroll);
router.route('/').get(GetUser, MyCourse);

module.exports = router;
