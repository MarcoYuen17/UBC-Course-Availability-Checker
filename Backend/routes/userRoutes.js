// Define router variable from Express and User variable which makes use of MongoDB User schema
const router = require('express').Router();
let User = require('../models/userModel');

/** Route to add user to database
 *  Requires filled user schema in JSON and request set to POST
 *  Access at http://localhost:5000/post
 */

router.post('/post', (req, res) => {
    const name = req.body.name;
    const phoneNum = req.body.phoneNum;
    const desiredCourseCode = req.body.desiredCourseCode;
    const desiredCourseId = req.body.desiredCourseId;
    const desiredCourseSection = req.body.desiredCourseSection;
    const desiredSeatType = req.body.desiredSeatType;
    const newUser = new User({
        name,
        phoneNum,
        desiredCourseCode,
        desiredCourseId,
        desiredCourseSection,
        desiredSeatType,
    });
    newUser
        .save()
        .then(() => res.json(`Confirmed, we'll send you a text at ${phoneNum} when ${desiredCourseCode}${desiredCourseId}-${desiredCourseSection} has space!`))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;