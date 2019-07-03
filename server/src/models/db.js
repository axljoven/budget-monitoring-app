let mongoose = require('mongoose')

let host  = 'localhost'
let port  = 27017
let db    = 'db_budget-app'
let uri   = `mongodb://${host}:${port}/${db}`

mongoose.connect(uri, { useNewUrlParser: true })

module.exports = mongoose