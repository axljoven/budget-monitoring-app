//
// Initialize dependencies
//

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const terminalLink = require('terminal-link')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//
// Mongoose
//

let mongoose = require('./models/db')

//
// Routes
//

let entry = require('./routes/entry')
let settings = require('./routes/settings')

// Home
app.get('/', (req, res) => res.send('Welcome!') )
// Entries
app.use('/entries', entry)
// Settings
app.use('/settings', settings)
// 404 page
app.use((req, res, next) => {
  let msg = 'Sorry, we cannot find what you are looking for.'
  res.status(400).send(msg)
})

//
// Start
//

let port = process.env.PORT || 8081
app.listen(port, () => {
  let link = terminalLink(`localhost:${port}`, `http://localhost:${port}`)
  console.log(`Running on ${link}`)
})