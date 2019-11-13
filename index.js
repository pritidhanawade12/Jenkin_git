var express = require ("express");
var emp = require ("./emp");
var admin = require ("./admin");
var app = express();

app.use("/admin",admin);
app.use("/employee",emp);




app.listen(8000,function()
{
    console.log("server started");
})

