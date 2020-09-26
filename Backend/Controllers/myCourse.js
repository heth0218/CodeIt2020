const Course = require('../Models/Course');
const MyCourse = require('../models/MyCourse');
const User = require('../models/User');
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

exports.MarksEntry = async (req, res, next) => {
  try {
    const { marks, outOf, quiz, user } = req.body;
    const u = await User.findOne({ email: user });
    const mycourse = await MyCourse.findOne({
      user: u._id,
      Course: req.params.course_id,
    });
    console.log(mycourse);
    let obj = {
      quiz: quiz,
      marks: marks,
      outOf: outOf,
    };
    let final_arr = [...mycourse.quiz_attempted, obj];
    mycourse.quiz_attempted = final_arr;
    await mycourse.save();
    return res.status(200).json({ success: true, data: mycourse });
  } catch (error) {
    return res.status(500).json(error);
  }
};

//For admin Dasboard,so admin can keep track of students progress in a perticular Course

exports.Student_Progress = async (req, res, next) => {
  try {
    const data = await MyCourse.find({ Course: req.params.course_id }).populate(
      {
        path: 'user',
      }
    );
    console.log(data);

    if (!data) {
      return res.status(400).json({ msg: 'No such course Found' });
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json(error);
  }
};
