const Video = require('../models/CourseVideo');
const DB = require('../config/db').getDB;

exports.addVideo = async(req, res, next) => {
    try {
        const title = req.body.title;
        const urls = req.body.url;
        const name = req.body.cname;
        const record = await Video.create({
            Title: title,
            Vurl: urls,
            CourseName: name
        });
        return res.status(201).json({
            msg: "Video Added",
            data: record
        });
    } catch (e) {
        res.status(500).json({ msg: "Server error " + e })
    }

};

exports.getVideoAll = async(req, res, next) => {
    try {
        const courseName = req.body.cname;
        Video.find({ CourseName: courseName })
            .then((data) => {
                if (data.length >= 1) {
                    res.status(200).json({
                        msg: "Fetched all videos for " + courseName,
                        data: data
                    });
                } else {
                    res.status(404).json({
                        msg: "No Item found"
                    });
                }
            })
            .catch((e) => {
                res.status(500).json({ msg: "Server error " + e });
            });
    } catch (e) {
        res.status(500).json({ msg: "Server error " + e });
    }
};


exports.getOneVideo = async(req, res, next) => {
    try {
        const VideoTitle = req.body.VideoTitle;
        Video.findOne({ Title: VideoTitle })
            .then(data => {
                res.status(200).json({
                    msg: "Fetched video for title - " + VideoTitle,
                    data: data
                })
            }).catch(e => {
                res.status(500).json({ msg: "Server error " + e });
            });
    } catch (e) {
        res.status(500).json({ msg: "Server error " + e });
    }
}