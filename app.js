var express = require("express");
var mongoose = require("mongoose");
var keys = require("./config/keys");
require("./models/users");
require("./services/passport");

mongoose.connect(keys.mongoURI,{
    useMongoClient: true
});

var app = express();

require("./routes/authRoutes")(app);
app.listen(process.env.PORT, process.env.IP)