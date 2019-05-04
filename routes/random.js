var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    var link = req.headers.host;
    var data =
        [
            {
                name: "Evan",
                singgle: "http://" + link + "/images/Singgle/1.jpg",
                corwd: "http://" + link + "/images/Crowd/1.jpg"
            }, {
            name: "Jemal",
            singgle: "http://" + link + "/images/Singgle/2.jpg",
            corwd: "http://" + link + "/images/Crowd/2.jpg"
        },{
            name: "Bella",
            singgle: "http://" + link + "/images/Singgle/3.jpg",
            corwd: "http://" + link + "/images/Crowd/3.jpg"
        },{
            name: "Bella",
            singgle: "http://" + link + "/images/Singgle/3.jpg",
            corwd: "http://" + link + "/images/Crowd/3.jpg"
        },{
            name: "Cassia",
            singgle: "http://" + link + "/images/Singgle/4.jpg",
            corwd: "http://" + link + "/images/Crowd/4.jpg"
        }


        ]

    var index = Math.random() * data.length
    console.log(data.length)
    console.log(index)
    res.send(data[parseInt(index)])

});


module.exports = router