var admin = require('firebase-admin');

var serviceAccount = require('../keys/jatim-park-vip-recognizer-firebase-adminsdk-lncks-09c48b8eb9');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://jatim-park-vip-recognizer.firebaseio.com/'
});

var registrationToken = "cux-0Yi2syo:APA91bFTZqYFKlcprqeMvYjSzrT7zkymvAHMUKvQkfwKBXYaDxaHbvDX1Xoi1Ck5rAvznswPkiO1VKCcJE5Aw3IQ7gvIC56lV3PjjlHGNlCgFEi_QqR3wXln-ibTGMDZbCecDjZ6TcQp";

module.exports = admin