const Koa = require('koa') // 导入koa2
const bodyParser = require('koa-bodyparser') // 解析request的body
const logger = require('koa-logger') // 日志

const routers = require('./routes/index')

const app = new Koa() // 创建一个Koa对象表示webapp本身

app.use(bodyParser())
app.use(logger())

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.use(async (next) => {
  let start = new Date()
  await (next)
  let ms = new Date() - start
  console.log(ms)
})

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3000)
console.log('app started at port 3000 ....')
