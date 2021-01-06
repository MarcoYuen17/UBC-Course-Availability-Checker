// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);

let User = require('./models/userModel');
const getSeatNums = require('./scraper');
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
        const courseCode = user.desiredCourseCode;
        const courseId = user.desiredCourseId;
        const courseSection = user.desiredCourseSection;
        const seatType = user.desiredSeatType;
        const numSeats = await getSeatNums(courseCode, courseId, courseSection, seatType);

        if (numSeats > 0) {
            console.log(`Seat available for ${user.name} in ${courseCode}${courseId} - section ${courseSection}, sending text`);
            twilioClient.messages.create({
                body: `Hi ${user.name}, a seat is available in ${courseCode}${courseId} - section ${courseSection}!`,
                from: '+12063856072',
                to: user.phoneNum
            });
        }
    }
}

app.use('', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});