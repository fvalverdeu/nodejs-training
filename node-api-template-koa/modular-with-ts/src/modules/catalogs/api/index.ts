import Router from 'koa-router'
import Controller from './controller'

const controller = new Controller()
const router = new Router({ prefix: '/catalogs' })

router.get('catalogs/list', '/:iso', controller.GetAllCatalog)

export default router
