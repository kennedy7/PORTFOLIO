const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const { router } = require("./route");
const PORT = process.env.PORT || 4000;
const path = require("path");
const app = express();

// //view engine
// app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
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
  // res.render("/index.html");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname + "/public")));

app.use(express.json());

app.use(router);
