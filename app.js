var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    res.send({hi: 'amit'})
})

app.listen(process.env.PORT, process.env.IP)