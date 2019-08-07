import Router from 'koa-router'
import Controller from './controller'

const router = new Router({ prefix: '/postulants' })
const controller = new Controller()

router.get('postulants/list', '/', controller.get)
router.get('postulants/id', '/:id', controller.getById)

export default router
