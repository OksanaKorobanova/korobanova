const nodemailer = require('nodemailer');
// const dotenv = require ('dotenv');
// dotenv.config();
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // user: process.env.REACT_APP_USER_FROM, // email address to send email from
    // pass: process.env.REACT_APP_PASS // gmail account password
    user: 'korobanovaweb@gmail.com', // email address to send email from
    pass: 'd!n0km74269./123web' // gmail account password
  }
});

module.exports = transporter;