var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.post('/new-agreement', function(req, res, next) {
    const msg = {
        to: req.body.counterParty.email, // Change to your recipient
        from: 'noreply@paidnetwork.com', // Change to your verified sender
        subject: 'You Have A New Smart Agreements of PAID Network',
        text: `Hi ${req.body.counterParty.name}, you have a new Smart Agreement from ${req.body.party.name}, please visit your PAID Network Account from https://dev-app.paidnetwork.com to review the requested Agreement.`,
        html: `Hi ${req.body.counterParty.name}, you have a new <strong>Smart Agreement</strong> from ${req.body.party.name}, please visit your <a href="https://dev-app.paidnetwork.com/" target="_blank">PAID Network Account</a> to review the requested Agreement.` ,
    }

    sgMail
        .send(msg)
        .then((response) => {
            let replay = {
                status: response[0].statusCode,
                error: null
            }
            res.end(JSON.stringify(replay));
        })
        .catch((error) => {
            console.log(error)
            let replay = {
                status: 500,
                error: "internal error"
            }
            res.status(500).end(JSON.stringify(replay));
        })

});


router.post('/accept-agreement', function(req, res, next) {
    const msg = {
        to: req.body.counterParty.email, // Change to your recipient
        from: 'noreply@paidnetwork.com', // Change to your verified sender
        subject: `Your Agreements has been accepted by ${req.body.counterParty.name} PAID Network`,
        text: `Hi ${req.body.counterParty.name}, your Smart Agreement from ${req.body.party.name}, please visit your PAID Network Account from https://dev-app.paidnetwork.com to review the requested Agreement.`,
        html: `Hi ${req.body.counterParty.name},  your <strong>Smart Agreement has been accepted </strong> from ${req.body.party.name}, please visit your <a href="https://dev-app.paidnetwork.com/" target="_blank">PAID Network Account</a> to review the requested Agreement.` ,
    }

    sgMail
        .send(msg)
        .then((response) => {
            let replay = {
                status: response[0].statusCode,
                error: null
            }
            res.end(JSON.stringify(replay));
        })
        .catch((error) => {
            console.log(error)
            let replay = {
                status: 500,
                error: "internal error"
            }
            res.status(500).end(JSON.stringify(replay));
        })

});

router.post('/reject-agreement', function(req, res, next) {
    const msg = {
        to: req.body.counterParty.email, // Change to your recipient
        from: 'noreply@paidnetwork.com', // Change to your verified sender
        subject: `Your Agreements has been rejected by ${req.body.counterParty.name} PAID Network`,
        text: `Hi ${req.body.counterParty.name}, your Smart Agreement from ${req.body.party.name}, please visit your PAID Network Account from https://dev-app.paidnetwork.com to review the requested Agreement.`,
        html: `Hi ${req.body.counterParty.name}, your <strong>Smart Agreement has been rejected </strong> from ${req.body.party.name}, <br>Reasons <p>${req.body.counterParty.comments}<p> <br>please visit your <a href="https://dev-app.paidnetwork.com/" target="_blank">PAID Network Account</a> to review the requested Agreement.` ,
    }

    sgMail
        .send(msg)
        .then((response) => {
            let replay = {
                status: response[0].statusCode,
                error: null
            }
            res.end(JSON.stringify(replay));
        })
        .catch((error) => {
            console.log(error)
            let replay = {
                status: 500,
                error: "internal error"
            }
            res.status(500).end(JSON.stringify(replay));
        })

});

module.exports = router;
