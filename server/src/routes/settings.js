let express = require('express')
let router = express.Router()

// Notify the user when /settings routes is used
router.use(function(req, res, next) {
  console.log('settings route init')
  next()
})

// Settings Dashboard
router.get('/', function(req, res) {
  res.send('/settings')
})

module.exports = router

