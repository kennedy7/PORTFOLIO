const express = require ('express');
const router = express.Router()
const nodemailer = require ('nodemailer')

router.post("/contact", (req, res)=>{
    const { name, email, subject, message} = req.body
    console.log(req.body)
//MAIL SETUP
var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mynodemailtestmail@gmail.com',
        pass: 'lwatthpnjzantftq'
    },
});

var mailOptions = {
    from: 'mynodemailtestmail@gmail.com',
    to:  email,
    subject: `Message From ${name}: ${subject}`,
    text: `my name is ${name}, ${message}. you can reach me through ${email} ,`
   
    
};

mail.sendMail(mailOptions, (err, data)=> {
    if (err) {
        console.log('mailing error');
        console.log(err)
        res.send('invalid mail')
    } else {
        console.log('Email sent successfully:' + data.response);
        res.send('mail sent to KENNEDY')
    }
})
})

module.exports = {router}
