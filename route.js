const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");

router.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);
  //MAIL SETUP
  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mytechportfolio1@gmail.com",
      pass: "otpcgoekchmnwoyt",
    },
  });

  var mailOptions = {
    from: email,
    to: "mytechportfolio1@gmail.com",
    subject: `[PORTFOLIO MAIL] SUBJECT: ${subject}`,
    text: `This is ${name}, ${message}. Reach back through ${email} ,`,
  };

  mail.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("mailing error");
      res.send("mailing error, Please try again");
    } else {
      console.log("Email sent successfully:" + data.response);
      // req.flash("Mail has been sent to KENNEDY HILLARY");
      // res.redirect("/");
      res.sendFile(path.join(__dirname + "/views/emailsent.html"));
      //   res.sendFile("/emailsent.html");
    }
  });
});

module.exports = { router };
