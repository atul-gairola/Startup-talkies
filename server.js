require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

// Mongo Setup
const MONGODB_URI = `mongodb+srv://admin-atul:${MONGODB_PASS}@cluster0-ymx8s.mongodb.net/<dbname>?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URI || 'mongodb://localhost/Startup_Talkies', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose has been connected');
});

// Database Schema
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    location: String  
});


const EmployerSchema = new Schema({
    email: String,
    password: String,
    companyName: String,
    companyWebsite: String,
    category: String,
    location: String,
    jobDescription: String
});

// Model
const Employee = mongoose.model('Employee', EmployeeSchema);
const Employer = mongoose.model('Employer', EmployerSchema);


// SERVER ROUTES

app.get('/', (req, res) => {
    res.send('this is the server');
});


app.post('/mailData', (req,res) => {

// Nodemailer setup
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
    });

  let mailOptions = {
    from : process.env.EMAIL,
    to: 'shubham@startuptalky.com',
    subject: 'review your job application',
    text: `${req.body.mailDesc}
           Edit your application here http://localhost:3000/edit`
};

transporter.sendMail(mailOptions, (err, data) => {
    if(err)
    console.log('Error: ', err);
    else
    console.log('Email sent')
})

  res.json({
      msg: 'Data received'
  });
});


const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => {
    console.log('Server started on port 5000');
})
