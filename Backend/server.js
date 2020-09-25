const express = require('express');
const connectDB = require('./config/db');
const course = require('./routes/Courses');
const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use('/public', express.static('public'));
app.use('/api/users', require('./routes/user'));

app.use('/api/admin', require('./routes/admin'));
app.use('/api/course', course);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Hey! listening to you on port ${PORT}`);
});