import Router from 'koa-router'
import Controller from './controller'

const controller = new Controller()
const router = new Router({ prefix: '/campaigns' })

router.get('campaigns/findByIso', '/:iso', controller.findByIso)

export default router
