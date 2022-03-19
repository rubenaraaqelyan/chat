const { addMessage, getMessages } = require('../controllers/message')
const express = require('express')

const router = express.Router()

router.post('/addmsg', addMessage)
router.post('/getmsg', getMessages)

module.exports = router
