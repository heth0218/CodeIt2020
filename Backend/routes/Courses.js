const express = require('express');
const router = express.Router({ mergeParams: true });
const { admin_access, GetUser } = require('../middleware/auth');
const { All_Courses_Cache } = require('../middleware/Courses_Cache_Middleware');
const {
  AllCourses,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
  OneCourse,
} = require('../Controllers/course');

router.route('/all_courses').get(AllCourses);
router.route('/create_course').post(admin_access, CreateCourse);
router.route('/update_course/:course_id').put(admin_access, UpdateCourse);
router.route('/delete_course/:course_id').delete(admin_access, DeleteCourse);
router.route('/one_course/:course_id').get(OneCourse);

module.exports = router;
