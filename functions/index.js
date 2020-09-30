const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const config = functions.config();
admin.initializeApp();

let transporter = nodemailer.createTransport({
  serice: 'Gmail',
  auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
  from: 'Arc Development',
  to: 'service@kashrid.com',
  subject: 'Testing Node Mailer',
  text: 'Test Successfull',
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      response.send(error);
    } else {
      response.send('Message sent successfully');
    }
  });
});
