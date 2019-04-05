var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var nama = req.body.nama
    var admin = require('../Config/firebaseConfig')
    var registrationToken = 'cux-0Yi2syo:APA91bFTZqYFKlcprqeMvYjSzrT7zkymvAHMUKvQkfwKBXYaDxaHbvDX1Xoi1Ck5rAvznswPkiO1VKCcJE5Aw3IQ7gvIC56lV3PjjlHGNlCgFEi_QqR3wXln-ibTGMDZbCecDjZ6TcQp';
// See documentation on defining a message payload.
    var message = {
        notification: {
            title: 'VIP',
            body: 'Ada VIP beranma '+nama
        },
        data: {
            title: 'VIP',
            body: 'Ada VIP beranma '+nama
        },
        token: registrationToken
    };
// Send a message to the device corresponding to the provided
// registration token.
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.

            res.send({
                "status":"sukses",
                "data": nama
            })
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
});

module.exports = router;
