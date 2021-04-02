const express = require('express')
const router = express.Router()
const pack = require('../../package.json')

router.get('/', async (req, res, next) => {
  res.status(200).send({
    env: process.env.NODE_ENV,
    version: pack.version,
  })
})

module.exports = router
