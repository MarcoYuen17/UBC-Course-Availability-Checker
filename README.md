# UBC Course Availability Checker
- MERN stack web app which allows users to be notified via text message when a seat is available in a particular course section
- Course availability data scraped from UBC Course Schedule pages

![](main_ui.png 'Main UI')

## Features:
- Server continuously scrapes particular UBC Course Schedule pages corresponding to user queries
- If seats are available for a user's desired course, a text message is sent to the phone number provided via Twilio API
- Server will delete user queries after 5 successful searches and texts sent

- *NOTE: This app misses an edge case where the session (year and season) need to be specified in the URL for scraping, and when this occurs, queries will always fail
  - This could be addressed by adding additional try/catch statements in getNumSeats() to check for the possible URLs at which course seat data can be found

## Usage:
- Add Twilio API keys and MongoDB Atlas URI in Backend/.env
- In Backend, run nodemon server
- In Frontend, run npm start
- Navigate to localhost:3000 to view the user interface