const Video = require('../models/CourseVideo');

exports.addVideo = async(req, res, next) => {
    const title = req.body.title;
    const urls = req.body.url;
    const record = new Video({
        Title: title,
        Vurl: urls
    });
    record.save().then(() => {
        res.status(201).json({
            msg: "Video Added"
        });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).json({ msg: "Server error" })
    });
};