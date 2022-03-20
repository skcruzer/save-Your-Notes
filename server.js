const express = require('express')
const path = require('path')

// call express as a function
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use html files located in public folder
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  // index.html is the response retrieved when a user goes to website
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/notes', (req, res) => {
  // notes.html is the response retrieved when /notes is requested
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})



// running on a port which is local host 3000
app.listen(process.env.PORT || 3000)