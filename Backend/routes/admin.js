const express = require('express')
const router = express.Router()
const Video = require('../models/CourseVideo');
const VideosController = require('../Controllers/videos');

router.post('/add-video', VideosController.addVideo);
router.post('/get-video-all', VideosController.getVideoAll);
router.post('/get-video-byTitle', VideosController.getOneVideo);

module.exports = router;