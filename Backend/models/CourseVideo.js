const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Please enter a title'],
        default: 'null',
    },
    Vurl: {
        type: String,
        required: true,
    },
    course: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
    },
    Publisher: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    },
});

module.exports = mongoose.model('video', VideoSchema);