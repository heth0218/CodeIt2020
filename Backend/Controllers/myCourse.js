const Course = require('../Models/Course');
const MyCourse = require('../models/MyCourse');

exports.Enroll = async (req, res, next) => {
  try {
    req.body.user = req.user._id;
    req.body.Course = req.params.course_id;
    console.log(req.body);
    const course = await MyCourse.create(req.body);
    return res.status(200).json({ success: true, data: course });
  } catch (error) {}
};

exports.MyCourse = async (req, res, next) => {
  try {
    const mycourses = await MyCourse.find({ user: req.user._id }).populate({
      path: 'Course',
      populate: {
        path: 'videos quiz',
      },
    });
    if (!mycourses) {
      return res
        .status(400)
        .json({ msg: 'You have not enrolled in any course yet' });
    }
    return res.status(200).json({ success: true, data: mycourses });
  } catch (error) {
    return res.status(500).json(error);
  }
};
