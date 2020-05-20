// 映射出3000接口
const msg = require('./teacherMessage.js')
const express = require('express')
const app = express()
const router = require('./router.js')

app.use('/router', router)
app.listen(3000)