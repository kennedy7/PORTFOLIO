const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const { router } = require("./route");
const PORT = process.env.PORT || 4000;
const path = require("path");
const app = express();

// //view engine
// app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);
