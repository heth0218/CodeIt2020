const express = require('express')
const router = express.Router()
const Video = require('../models/CourseVideo');
const VideosController = require('../middleware/videos');

router.post('/add-video', VideosController.addVideo);

module.exports = router;