// 路由，不好的点在于需要调用业余
const express = require('express')
const router = express.Router()
const msg = require('./teacherMessage.js')

router.get('/', async (req, res) => {
  const aaa = await msg()
  res.send(aaa)
})

module.exports = router