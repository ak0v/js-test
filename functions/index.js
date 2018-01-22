const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const gmailEmail = functions.config().gmail.gmail;
const gmailPass = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user: gmailEmail,
        pass: gmailPass
    }
});

exports.sendRSVPEmail = functions.database.ref('guest').onWrite(event => {
    const rsvp = event.data.val();

    const firstGuestEmail = rsvp.firstGuestEmail;

    return sendRSVPEmail(rsvp, firstGuestEmail);
});

function sendRSVPEmail(rsvp,firstGuestEmail) {
    const mailOptions = {
        from : `stefkaplusandrey4life@gmail.com`,
        to : `andrej.kovachev@gmail.com`
    }
    mailOptions.subject = `Потвърждение от ${rsvp.firstGuestName} и ${rsvp.secondGuestName}`
    mailOptions.text = `${firstGuestEmail} , ${rsvp.vegetarianMenus}`;
    mailTransport.sendMail(mailOptions).then(() => {
        console.log('New rsvp mail sent to andrej.kovachev@gmail.com');
    })
}