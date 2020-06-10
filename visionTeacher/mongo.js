const mongodbClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/visions'
const mongodb = require('mongodb')

// console.log(mongodbClient)
console.log('------------')
console.log(mongodb.db)
// mongodbClient.connect(url, (err, db) => { 
//   if(err) {
//     console.log("连接失败");
//   }else {
//     console.log(db)
//     const dbase = db.db('vision')
//     dbase.createCollection('site', (err, res) => {
//       if (err) {
//         console.log(err)
//         return
//       } else {
//         console.log('创建集合成功')
//       }
//     })
//     const msg = [
//       {name: 'songsong99', url: 'www.baidu.com'},
//       {name: 'songsong99', url: 'www.baidu.com'},
//       {name: 'songsong99', url: 'www.baidu.com'},
//       {name: 'songsong99', url: 'www.baidu.com'},
//       {name: 'songsong99', url: 'www.baidu.com'},
//       {name: 'songsong99', url: 'www.baidu.com'},
//       {name: 'songsong99', url: 'www.baidu.com'}
//     ]
//     dbase.collection('sitetwo').insertMany(msg, (err, res) => {
//       if (err) {
//         console.log(err)
//         return
//       } else {
//         db.close()
//       }
//     })
//     // dbase.collection('sitetwo').insertOne(msg, (err, res) => {
//     //   if (err) {
//     //     console.log(err)
//     //     return
//     //   } else {
//     //     db.close()
//     //   }
//     // })

//     // dbase.collection('site').find({name: 'songsong99'}).limit(3).toArray((err, result) => {
//     //   db.close()
//     // })
//     // var whereStr = {"name":'songsong'};  // 查询条件
//     // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
//     // dbase.collection('site').updateOne(whereStr, updateStr, (err, res) => {
//     //   db.close()
//     // })
//     // dbase.collection('site').deleteMany(whereStr, (err, res) => {
//     //   db.close()
//     // })
//   }
// })
