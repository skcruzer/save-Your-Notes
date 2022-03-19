const router = require('express').Router()
const { response } = require('express')
const data = require('../db/data.js')

router.get('/notes', (req, res) => {
  data.getNotes().then((notes) => {
    return res.json(notes)
  })
})

module.exports = router