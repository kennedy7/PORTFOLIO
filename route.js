const express = require ('express');
const router = express.Router()
const nodemailer = require ('nodemailer')

router.post("/contact", (req, res)=>{
    console.log(req.body)
//MAIL SETUP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 587,
    //input your email login details to receive mail and test 
    auth: {
        user: 'kennedyhillary6@gmail.com',
        pass: 'AsuncionRaker'
    }
});

const mailOptions = {
    from: req.body.emailAddress,
    to: 'mynodemailtestmail@gmail.com',
    subject: `message from  ${req.body.emailAddress}: ${req.body.subject}`,
    text: req.body.message
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('mailing error');
    } else {
        console.log('Email sent successfully:' + data.response);
        res.send('mail sent to KENNEDY')
    }
})
})

module.exports = {router}
