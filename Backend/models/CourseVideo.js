const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Please enter a title'],
        default: "null"
    },
    Vurl: {
        type: String,
        required: true,
    },
    CourseName: {
        type: String,
        required: true,
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model('video', VideoSchema);