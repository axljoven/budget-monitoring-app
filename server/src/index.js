/**
 * Initialize dependencies
 */

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const terminalLink = require('terminal-link')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


/**
 * Start
 */

let port = process.env.PORT || 8081

app.listen(port, () => {
  let link = terminalLink(`localhost:${port}`, `http://localhost:${port}`)
  console.log(`Running on ${link}`)
})