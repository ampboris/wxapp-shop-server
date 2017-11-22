/**
 * 整合所有子路由
 */
const router = require('koa-router')()

// user
const admin = require('./user/admin')

router.use('/user', admin.routes(), admin.allowedMethods())

module.exports = router
