import Router from 'koa-router'
import Controller from './controller'

const controller = new Controller()
const router = new Router({ prefix: '/post' })

router.get('/post/list', '/', controller.getAllPost)

export default router
