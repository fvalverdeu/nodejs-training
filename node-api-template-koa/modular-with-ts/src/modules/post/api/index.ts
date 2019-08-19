import Router from 'koa-router'
import Controller from './controller'

const controller = new Controller()
const router = new Router({ prefix: '/post' })

router.get('/post/list', '/', controller.getAllPosts)
router.get('/post/idPost', '/:idPost', controller.findPostById)
router.get('/posts?userId', '/userId/:userId', controller.getPostsByUserId)

export default router
