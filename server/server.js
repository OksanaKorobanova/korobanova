const dotenv = require ('dotenv');
dotenv.config();
const express = require('express'),
router = express.Router(),
smtpTransport = require('nodemailer-smtp-transport');

const app = express(),
  // bodyParser = require('body-parser'),
  // nodemailer = require('nodemailer'),
  port = process.env.REACT_APP_PORT;
// app.use(express.static('data/img'));
const connectDB = require('./config/db');

// Connect Database
connectDB();

// const transporter = require('./config/nodemailerConfig');
//setup nodemailer
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport(smtpTransport({    
     service: 'gmail',
     host: 'smtp.gmail.com', 
     auth: {        
          user: 'korobanovaweb@gmail.com',        
          pass: 'd!n0km74269./123web'    
     }
}));

//get route to send mail, from form
app.post("/api/send", function(req,res){
  //options
  const mailOptions = {
    from: 'korobanovaweb@gmail.com', // sender address
    to: 'oksanavitol@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line
    html: `
    <p>You have a new contact request.</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
      <li>Message: ${req.body.message}</li>
    </ul>
    `,
   };
  //delivery
  transporter.sendMail(mailOptions, function(error, info){
       if (error) {
           console.log(error);  
       } else {     
           console.log('Email sent: ' + info.response);  
       }   
  });

});

// place holder for the data
const projects = [
  {
    id: 1,
    name: 'Markroid',
    link: 'https://markroid.com/',
    logo: '../src/images/markroid/logo.png',
    background: '../src/images/markroid/bg.jpg',
    description:
      'Markroid platform provides digital infrastructure for startups and businesses to research, develop, maintain and automate business model and all underlying resources and activities',
    client: 'XGenTeam',
    clientLocation: 'Baton Rouge, US',
    image: '../src/images/projects/markroid.jpg',
    business: 'A cloud-based(AWS) SaaS platform to manage business processes',
    solution: [
      'Landing Page design && development',
      'SPA built with React (functional components & custom hooks & context)',
      'UI Framework - Material UI (custom theme, theme styles overriding)',
      'AWS Authentication, Amazon S3 on front-end (using AWS Amplify)',
      'APIs using GraphQL',
      'Tables, charts(using Recharts), custom forms',
      'Developed single React project for converting JSON to Landing Page for Markroid clients',
      'Developed npm package for converting JSON to React Material UI forms',
    ],
    technologies: [
      'React',
      'Material UI',
      'GraphQL',
      'NodeJs',
      'AWS',
      'HTML5',
      'CSS3',
    ],
    status: 'in progress',
  },
];

app.get('/api', (req, res) => {
  res.send('App Works !!!!');
});

app.get('/api/projects', (req, res) => {
  console.log('api/projects called!!!!');
  res.json(projects);
});

// app.post('/api/send', (req, res) => {
//   console.log('api/send called!!!!');
//   try {
//     const mailOptions = {
//       // from: process.env.REACT_APP_USER_FROM, // sender address
//       // to: process.env.REACT_APP_USER_TO, // list of receivers
//       from: 'korobanovaweb@gmail.com', // sender address
//       to: 'oksanavitol@gmail.com', // list of receivers
//       subject: req.body.subject, // Subject line
//       html: `
//       <p>You have a new contact request.</p>
//       <h3>Contact Details</h3>
//       <ul>
//         <li>Name: ${req.body.name}</li>
//         <li>Email: ${req.body.email}</li>
//         <li>Subject: ${req.body.subject}</li>
//         <li>Message: ${req.body.message}</li>
//       </ul>
//       `,
//     };

//     transporter.sendMail(mailOptions, function (err, info) {
//       if (err) {
//         res.status(500).send({
//           success: false,
//           message: 'Something went wrong. Try again later',
//         });
//       } else {
//         res.send({
//           success: true,
//           message: 'Thanks for contacting us. We will get back to you shortly',
//         });
//       }
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: 'Something went wrong. Try again later',
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
