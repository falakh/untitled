var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/',function (req,res,next) {
    var userName = req.body.username;
    const token = jwt.sign({ id: userName}, 'secret_key');

    res.send({name:userName,token:token});

})

module.exports = router

