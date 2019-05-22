var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', function (req, res, next) {
    try {
        token = req.body.token;
        var decoded = jwt.verify(token, 'secret_key');
        console.log(decoded)
        if(decoded.id){
            var link = req.headers.host;

            var data =
                [
                    {
                        name: "Evan",
                        singgle: "http://" + link + "/images/Singgle/1.jpg",
                        crowd: "http://" + link + "/images/Crowd/1.jpg"
                    }, {
                    name: "Jemal",
                    singgle: "http://" + link + "/images/Singgle/2.jpg",
                    crowd: "http://" + link + "/images/Crowd/2.jpg"
                }, {
                    name: "Bella",
                    singgle: "http://" + link + "/images/Singgle/3.jpg",
                    crowd: "http://" + link + "/images/Crowd/3.jpg"
                }


                ]

            var index = Math.random() * data.length
            res.send(data[parseInt(index)])
        }

    } catch(err) {
        res.send({status:"fail"})
// err
    }


});


module.exports = router