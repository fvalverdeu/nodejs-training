import Service from '../service'

const service = new Service()

export default {
  async campaign(_: any, { iso, region, zona }: any) {
    return await service.search(iso, region, zona)
  },
}
