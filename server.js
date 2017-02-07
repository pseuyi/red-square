var express = require('express')
var path = require('path')
var compression = require('compression')
var app = express()

// compression middleware
// must be first!
app.use(compression())

// serve static stuff like style.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// production server, localhost:8080
var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
