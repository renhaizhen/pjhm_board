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

  module.exports = router