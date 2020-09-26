const express = require('express');
const router = express.Router({ mergeParams: true });
const { admin_access, GetUser } = require('../middleware/auth');
const {
  Enroll,
  MyCourse,
  MarksEntry,
  Student_Progress,
} = require('../Controllers/myCourse');

router.route('/enroll/:course_id').post(GetUser, Enroll);
router.route('/').get(GetUser, MyCourse);
router.route('/marks_entry/:course_id').post(admin_access, MarksEntry);
router.route('/track_students/:course_id').get(admin_access, Student_Progress);

module.exports = router;
