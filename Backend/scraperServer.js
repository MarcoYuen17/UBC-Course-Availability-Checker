// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);

let User = require('./models/userModel');
const getNumSeats = require('./scraper');
const userRouter = require('./routes/userRoutes');

// Put express application in app variable
// Define port for web server to listen on
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');

    checkUsers();
});

// Check course availability for each user every 5 mins
function checkUsers() {
    User.find()
        .then((users) => {
            checkAvailabilities(users);
        })
        .catch((err) => console.log(err));
    
    setTimeout(checkUsers, (5 * 60000));
}

async function checkAvailabilities(userList) {
    for (let i = 0; i < userList.length; i++) {
        const user = userList[i];
        const id = user._id;
        const courseCode = user.desiredCourseCode;
        const courseId = user.desiredCourseId;
        const courseSection = user.desiredCourseSection;
        const seatType = user.desiredSeatType;
        const numSeats = await getNumSeats(courseCode, courseId, courseSection, seatType);

        if (numSeats > 0) {
            const updatedUser = {
                name: user.name,
                phoneNum: user.phoneNum,
                desiredCourseCode: courseCode,
                desiredCourseId: courseId,
                desiredCourseSection: courseSection,
                desiredSeatType: seatType,
                numSuccesses: ++user.numSuccesses
            };

            User.findByIdAndUpdate(id, updatedUser)
                .then(() => {console.log(`\nSeat available for ${user.name} in ${courseCode}${courseId} - section ${courseSection}, sending text`)})
                .catch((err) => {console.log(`\nAn error occurred while updating a user: ${err}`)});
            
            twilioClient.messages.create({
                body: `Hi ${user.name}, a seat is available in ${courseCode}${courseId} - section ${courseSection}!`,
                from: '+12063856072',
                to: user.phoneNum
            });
        }

        if (user.numSuccesses >= 5) { // Removes user from database after 5 successful availability checks
            User.findByIdAndDelete(id)
                .then(() => {console.log(`\n${user.name}: ${courseCode}${courseId}-${courseSection} deleted after 5 successes`)})
                .catch((err) => {console.log(`\nAn error occurred while deleting a user: ${err}`)});
        }
    }
}

app.use('', userRouter);

app.listen(port, () => {
    console.log(`\nServer is running on port: ${port}`);
});