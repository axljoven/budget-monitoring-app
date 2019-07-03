let express = require('express')
let router = express.Router()

// Notify the user when these routes are used
router.use(function(req, res, next) {
  console.log('entry route init')
  next()
})

// Entries
router.get('/', function(req, res) {
  res.send('/entries')
})

router.get('/:id', function(req, res) {
  res.send('/entries/' + req.params.id) 
})

module.exports = router

