const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
  // index.html is the response retrieved when a user goes to website
  res.sendFile(path.join(__dirname,'../public/index.html'))
})

router.get('/notes', (req, res) => {
  // notes.html is the response retrieved when /notes is requested
  res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;