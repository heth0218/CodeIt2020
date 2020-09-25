const express = require('express');
const router = express.Router({ mergeParams: true });
const { admin_access, GetUser } = require('../middleware/auth');
const { All_Courses_Cache } = require('../middleware/Courses_Cache_Middleware');
const { AllCourses, CreateCourse } = require('../Controllers/course');

router.route('/all_courses').get(All_Courses_Cache, AllCourses);
router.route('/create_course').post(GetUser, CreateCourse);

module.exports = router;
