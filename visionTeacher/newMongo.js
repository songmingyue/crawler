const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017/visions'
const content = mongodb.connect


console.log(content)
// module.exports = mongodb

mongodb.content = async function () {
  console.log(111)
  if (mongodb.db) {
    console.log(111)
    await mongodb.db.close()
  }
  const dbs = mongodb.db.db('vision')
  console.log(dbs)
  const db = mongodb.db = await content(url)
  
  mongodb.counters = db.collection('counters')
  mongodb.users = db.collection('users')
  mongodb.posts = db.collection('posts')
  const msg = [
    {name: 'songsong99', url: 'www.baidu.com'},
    {name: 'songsong99', url: 'www.baidu.com'},
    {name: 'songsong99', url: 'www.baidu.com'},
    {name: 'songsong99', url: 'www.baidu.com'},
    {name: 'songsong99', url: 'www.baidu.com'},
    {name: 'songsong99', url: 'www.baidu.com'},
    {name: 'songsong99', url: 'www.baidu.com'}
  ]
  mongodb.counters.insertMany(msg, (err, res) => {
    if (err) {
      console.log(err)
      return
    } else {
      db.close()
    }
  })
}