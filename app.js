var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi From AMIT K D")
})

app.listen(process.env.PORT, process.env.IP)