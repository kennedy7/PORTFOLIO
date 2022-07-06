const express = require ('express')
const nodemailer = require ('nodemailer')
const { router } = require('./route')
const PORT = process.env.PORT || 4000
const app =express()


app.listen (PORT, ()=>{console.log(`server started on port ${PORT}`)})
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/cv.html')
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());

app.use(router)