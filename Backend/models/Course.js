const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, 'Please Add a Course Name'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Please Add a Course Description'],
    },
    Published_Date: {
      type: Date,
      default: Date.now(),
      required: false,
    },
    Publisher: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
module.exports = mongoose.model('Course', CourseSchema);
