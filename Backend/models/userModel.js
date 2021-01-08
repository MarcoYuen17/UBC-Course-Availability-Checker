const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNum: {
        type: String,
        required: true,
        trim: true,
    },
    desiredCourseCode: {
        type: String,
        required: true,
        trim: true,
    },
    desiredCourseId: {
        type: String,
        required: true,
        trim: true,
    },
    desiredCourseSection: {
        type: String,
        required: true,
        trim: true,
    },
    desiredSeatType: {
        type: String,
        required: true,
        trim: true,
    },
    numSuccesses: {
        type: Number,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;