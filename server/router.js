var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var cors = require('cors')
var bodyParser = require('body-parser')

router.use(cors())
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var pool = mysql.createPool({
  connectionLimit: 10,
  host: '132.232.0.240',
  user: 'yxy',
  password: 'test',
  database: 'mydb'
})

router.get('/', function (req, res) {
  res.end('Hello World!');
});

router.get('/user', function (req, res) {
  pool.query('select * from websites', function (error, results, fields) {
    if (error) return console.log('卧槽他妈的出错了:', error);
    res.end(JSON.stringify(results))
  });
})

router.post('/posttest', function (req, res) {
  console.log('收到post请求')
  console.log(req.body)
  res.send(req.body)
  res.end()
})

router.post('/userpost', function (req, res) {
  console.log('收到userinset请求')
  console.log(req.body)
  pool.query("insert into temp_user_info values(?,?)", [req.body.id, req.body.name], function (error, results, fields) {
    if (error) {
      console.log(error)
      res.send(error)
      res.end()
      return
    }
    res.send('插入成功')
    console.log(results)
    res.end(JSON.stringify(results))
  });
})

router.get('/userget', function (req, res) {
  pool.query("select * from temp_user_info", function (error, results, fields) {
    if (error) return console.log('卧槽他妈的出错了:', error);
    res.end(JSON.stringify(results))
  })
})

router.get('/get-account', function (req, res) {
  pool.query("select * from my_account", function (error, results, fields) {
    if (error) return console.log('卧槽他妈的出错了:', error);
    console.log(results)
    res.end(JSON.stringify(results))
  })
})

router.post('/insert-account', function (req, res) {
  pool.query("insert into my_account values(null,?,?,?,?)", [req.body.date, req.body.bigc, req.body.smallc, req.body.money], function (error, results, fields) {
    if (error) {
      console.log(error)
      res.send(error)
      res.end()
      return
    }
    res.send('插入成功')
    console.log(results)
    res.end(JSON.stringify(results))
  })
})

module.exports = router;