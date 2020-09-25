const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
        default: "null"
    },
    Vurl: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('video', VideoSchema);