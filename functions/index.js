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

exports.sendRSVPEmail = functions.database.ref('guest/{rsvp}').onWrite(event => {
    const rsvp = event.data.val();
    return sendRSVPEmail(rsvp);
});

function sendRSVPEmail(rsvp) {
    const mailOptions = {
        from : `stefkaplusandrey4life@gmail.com`,
        to : `andrej.kovachev@gmail.com`
    }
    mailOptions.subject = `Потвърждение от ${rsvp.firstGuestName} и ${rsvp.secondGuestName}`
    mailOptions.text = `${rsvp.firstGuestEmail} , ${rsvp.vegetarianMenus}`;
    mailOptions.html = `<h1>Потвърждение от ${rsvp.firstGuestName} и ${rsvp.secondGuestName}<h1>`+
                       `<p>Име: ${rsvp.firstGuestName} <br/> Имейл:${rsvp.firstGuestEmail}  </p>`+
                       `<p>Име: ${rsvp.secondGuestName} <br/> Имейл:${rsvp.secondGuestEmail}  </p>`+
                       `<p>Вегетарианско: ${rsvp.vegetarianYN} <br/> Брой:${rsvp.vegetarianMenus}  </p>`+
                       `<p>Детско: ${rsvp.childYN} <br/> Брой:${rsvp.childMenus}  </p>` 
    mailTransport.sendMail(mailOptions).then(() => {
        console.log('New rsvp mail sent to andrej.kovachev@gmail.com');
    })
}
