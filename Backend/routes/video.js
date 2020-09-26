const express = require('express');
const router = express.Router({ mergeParams: true });
const { admin_access, GetUser } = require('../middleware/auth');
const { All_Courses_Cache } = require('../middleware/Courses_Cache_Middleware');
const { addVideo, getVideoAll, getOneVideo } = require('../Controllers/videos');

router.route('/add_video/:course_id').post(admin_access, addVideo);
router.route('/get_video_all/:course_id').get(getVideoAll);
router.route('/get_video_byTitle').post(getOneVideo);
module.exports = router;