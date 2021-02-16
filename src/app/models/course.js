const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, minLength: 5, maxLength: 255, required: true },
    description: { type: String, maxLength: 600, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('Course', CourseSchema);