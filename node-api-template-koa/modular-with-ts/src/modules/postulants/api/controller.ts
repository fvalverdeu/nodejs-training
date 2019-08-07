import Service from '../service'
import { BaseContext } from 'koa'

const service = new Service()

export default class {
  async get(ctx: BaseContext): Promise<any> {
    ctx.body = await service.findAll()
  }

  async getById(ctx: BaseContext): Promise<any> {
    const id = ctx.params.id

    if (id < 1) {
      ctx.throw(400, 'El ID debe ser mayor a 0')
    } else {
      ctx.body = await service.findById(id)
    }
  }
}
