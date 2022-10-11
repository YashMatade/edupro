var express = require("express");
var router = express.Router();
var User = require("../../models/User/User")

router.put('/', (req, res) => {
    var body = req.body;
    let user = new User()

    user.trainerid = body.trainerid;
    user.name = body.name;
    user.email = body.email;
    user.password = body.password;

    user.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    });
    // res.send(JSON.stringify({status:"Success"}))
});


module.exports = router;