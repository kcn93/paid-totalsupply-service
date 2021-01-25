
const express = require('express');
const router = express.Router();
const whisper = require('../controllers/whispers.controllers');

router.post('/call-server-pub', [], whisper.callServerPub);
router.post('/call-server-sub', [], whisper.callServerSub);
router.post('/call-server-poll', [], whisper.callServerPoll);

module.exports = router;
