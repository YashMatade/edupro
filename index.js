var express = require("express");
var app = express();

var bodyparser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/edupro");
var db = mongoose.connection;

db.on("error",(err)=>{
    console.log(err);
});


db.on("open",()=>{
    console.log("connection success");
})


app.get("/", (req, res) => {
    res.send("Hello mongodb");
});


// app.use("/course",require("./routes/course"));


app.listen(8081, () => {
    console.log("Server is running at http://localhost:8081");
});
