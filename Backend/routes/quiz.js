const express = require('express');
const router = express.Router({ mergeParams: true });
const { admin_access, GetUser } = require('../middleware/auth');
const { CreateQuiz } = require('../Controllers/quiz');

router.route('/create_quiz/:course_id').post(admin_access, CreateQuiz);

module.exports = router;
