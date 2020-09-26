const Video = require('../models/CourseVideo');
const DB = require('../config/db').getDB;

exports.addVideo = async(req, res, next) => {
    try {
        req.body.Publisher = req.user._id;
        req.body.course = req.params.course_id;
        const video = await Video.create(req.body);
        return res.status(201).json({
            msg: 'Video Added',
            data: video,
        });
    } catch (e) {
        res.status(500).json({ msg: 'Server error ' + e });
    }
};

exports.getVideoAll = async(req, res, next) => {
    try {
        req.body.course = req.params.course_id;
        const courseName = req.body.course;
        Video.find({ course: courseName })
            .then((data) => {
                if (data.length >= 1) {
                    res.status(200).json({
                        msg: 'Fetched all videos',
                        data: data,
                    });
                } else {
                    res.status(404).json({
                        msg: 'No Item found',
                    });
                }
            })
            .catch((e) => {
                res.status(500).json({ msg: 'Server error ' + e });
            });
    } catch (e) {
        res.status(500).json({ msg: 'Server error ' + e });
    }
};

exports.getOneVideo = async(req, res, next) => {
    try {
        const VideoTitle = req.body.VideoTitle;
        Video.findOne({ Title: VideoTitle })
            .then((data) => {
                res.status(200).json({
                    msg: 'Fetched video for title - ' + VideoTitle,
                    data: data,
                });
            })
            .catch((e) => {
                res.status(500).json({ msg: 'Server error ' + e });
            });
    } catch (e) {
        res.status(500).json({ msg: 'Server error ' + e });
    }
};