/* eslint require-atomic-updates: 0 */
import { BaseContext } from 'koa'
import Service from '../service'

const service = new Service()

export default class {
  async GetAllCatalog(ctx: BaseContext): Promise<any> {
    const { iso } = ctx.params
    const { campaignCode } = ctx.query
    const response = await service.search(iso, campaignCode)

    ctx.body = response
  }
}
