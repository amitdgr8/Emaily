var express = require("express");
var mongoose = require("mongoose");
var cookieSession = require("cookie-session");
var passport = require("passport");
var keys = require("./config/keys");
require("./models/users");
require("./services/passport");

mongoose.connect(keys.mongoURI,{
    useMongoClient: true
});

var app = express();

app.use(
    cookieSession({
        maxAge: 10*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
app.listen(process.env.PORT, process.env.IP)