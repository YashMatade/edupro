var express = require("express");
var router = express.Router();
var Cousesection = require("../models/Cousesection")

router.put('/', (req, res) => {
    var body = req.body;
    let cousesection = new Cousesection()

    cousesection.courseid = body.courseid;
    cousesection.name = body.name;
    cousesection.srno = body.srno;

    cousesection.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
    // res.send(JSON.stringify({status:"Success"}))
});

router.post('/', async (req, res) => {
    var body = req.body;
    let cousesection = await Cousesection.findById(body.id)

    cousesection.courseid = body.courseid;
    cousesection.name = body.name;
    cousesection.srno = body.srno;

    cousesection.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
});

router.delete('/', async (req, res) => {
    var body = req.body;
    await Cousesection.findByIdAndDelete(body.id);

    res.end(JSON.stringify({ status: "success" }))
});

router.get('/', async (req, res) => {
    let data = await Cousesection.find();
    res.end(JSON.stringify({status:"success", data:data}))
});

router.get('/:id', async (req, res) => {
    let data = await Cousesection.findById(req.params.id);
    res.end(JSON.stringify({status:"success", data:data}))
});



module.exports = router;