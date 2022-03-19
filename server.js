const express = require('express')
const htmlRoutes = require('./routes/html-routes')
const apiRoutes = require('./routes/api-routes')

// call express as a function
const app = express()

const ports = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use html files located in public folder
app.use(express.static('public'))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)


// running on a port which is local host 3000
app.listen(ports)
