const express = require('express');
const connectDB = require('./config/db');
const course = require('./routes/Courses');
const quiz = require('./routes/quiz');
const videos = require('./routes/video');
const myCourse = require('./routes/MyCourse');
const Payment = require('./routes/Payment');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const fileUpload = require('express-fileupload');

connectDB();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json({ extended: false }));
app.use(fileUpload());
app.use('/public', express.static('public'));
app.use('/api/users', require('./routes/user'));

app.use('/api/course', course);
app.use('/api/videos/', videos);
app.use('/api/mycourse', myCourse);
app.use('/api/quiz', quiz);
app.use('/api', Payment);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Hey! listening to you on port ${PORT}`);
});
