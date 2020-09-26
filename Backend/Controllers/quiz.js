const quiz = require('../models/quiz');

exports.CreateQuiz = async (req, res, next) => {
  try {
    req.body.Publisher = req.user._id;
    req.body.Course = req.params.course_id;
    const Quiz = await quiz.create(req.body);
    return res.status(201).json({ success: true, data: Quiz });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
