var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @api {post} /users/submit-login 用户登录
 * @apiDescription 用户登录
 * @apiName submit-login
 * @apiGroup User
 * @apiParam {string} loginName 用户名
 * @apiParam {string} loginPass 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "name" : "loginName",
 *          "password" : "loginPass"
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/users/submit-login
 * @apiVersion 1.0.0
 */
 router.post('/submit-login', function (req, res, next) {
  let loginName = req.body.loginName;
  let loginPass = req.body.loginPass;
  res.json({
      success: true,
      result: {
          name: loginName,
          password: loginPass
      }
  });
});

module.exports = router;
