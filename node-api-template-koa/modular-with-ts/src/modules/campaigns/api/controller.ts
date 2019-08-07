/* eslint require-atomic-updates: 0 */
import { BaseContext } from 'koa'
import Service from '../service'

const service = new Service()

export default class {
  async findByIso(ctx: BaseContext): Promise<any> {
    const { iso } = ctx.params
    const { region, zone } = ctx.query
    const response = await service.search(iso, region, zone)

    ctx.body = response
  }
}
