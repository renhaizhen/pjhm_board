var modules = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

//连接
var conn = mysql.createConnection(modules.mysql)
conn.connect()

var jsonWrite = function(res,req){
    if(typeof req ==undefined){
        res.json({
            code: '1',
            msg: '操作失败'
        })
    }else{
        res.json(req)
    }
}

// 拉取各区域每日游客总数
router.post('/tourNum', (req, res) => {
    var sql = $sql.data.tourNum
    // var params = req.body
    // console.log(params)
    conn.query(sql, function (err, result) {
      if (err) {
        console.log(err)
      }
      if (result) {
        jsonWrite(res, result)
        console.log(result)
      }
    })
  })

 // 拉取各奇迹田园区域每日游客总数
 router.post('/rightQiji', (req, res) => {
  var sql = $sql.data.rightQiji
  // var params = req.body
  // console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

  // 拉取各柳鹫田园区域每日游客总数
router.post('/rightLiujiu', (req, res) => {
  var sql = $sql.data.rightLiujiu
  // var params = req.body
  // console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

 // 拉取各森林游憩区域每日游客总数
 router.post('/rightSenlin', (req, res) => {
  var sql = $sql.data.rightSenlin
  // var params = req.body
  // console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

 // 拉取各活力森林区域每日游客总数
 router.post('/rightHuoli', (req, res) => {
  var sql = $sql.data.rightHuoli
  // var params = req.body
  // console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

 // 拉取各滨江漫步区域每日游客总数
 router.post('/rightBinjiang', (req, res) => {
  var sql = $sql.data.rightBinjiang
  // var params = req.body
  // console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

  module.exports = router