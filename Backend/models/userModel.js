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
    timeDateSpaceFound: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;