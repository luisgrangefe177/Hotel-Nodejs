const express=require('express')
const { handleHome } = require('./controller')
const router = express.Router('')

router.get('/report', handleReport);
router.get("/:id?")

