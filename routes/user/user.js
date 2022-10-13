var express = require("express");
var router = express.Router();
var User = require("../../models/user/User")

router.put('/registration', (req, res) => {
    try{
    var body = req.body;
    let user = new User();
    user.trainerid = body.trainerid;
    user.name = body.name;
    user.email = body.email;
    user.password = body.password;
    user.timestamp = new Date();
    user.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    });
    }catch(ex){
        res.end(JSON.stringify({status:"failed",data:ex}));
    }
});

router.post("/markpaid", (req, res) => {
    let body = req.body;
    let user = new User();
    user.email = body.email;
    user.password = body.password;
    user.timestamp = new Date();
    user.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }));
    });
});


module.exports = router;
