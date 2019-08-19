/* eslint require-atomic-updates: 0 */

import { BaseContext } from 'koa'
import Service from '../service'

const service = new Service()

export default class {
  async getAllPosts(ctx: BaseContext): Promise<any> {
    const response = await service.getAllPosts()

    ctx.body = response
  }

  async findPostById(ctx: BaseContext): Promise<any> {
    const idPost = ctx.params.idPost
    const response = await service.findPostById(idPost)

    ctx.body = response
  }

  async getPostsByUserId(ctx: BaseContext): Promise<any> {
    const userId = ctx.params.userId
    const response = await service.getPostsByUserId(userId)

    ctx.body = response
  }
}
