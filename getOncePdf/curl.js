const superagent = require('superagent')
const cheerio = require('cheerio')
const http = require('http')

const options: {
  host: 'http://d-basic.visioneschool.com/v1/api/user/getTeacher',

}

http.get('', (res) => {
  let html = ''
  res.on('data', (data) => {
    html+=data
  })
  res.on('end', (end) => {
    console.log(html)
  })
})