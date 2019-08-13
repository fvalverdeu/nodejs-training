import { BaseContext } from 'koa'
import Service from '../service'

const service = new Service()

export default class {
  async getAllPost(ctx: BaseContext): Promise<any> {
    const response = await service.getAllPost()

    ctx.body = response
  }
}
