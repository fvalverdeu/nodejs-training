import Repository from './repository'
import { Postulant } from './model'

const repository = new Repository()

export default class {
  async findAll(): Promise<Postulant[]> {
    return await repository.findAll()
  }

  async findById(id: number): Promise<Postulant> {
    const data = await repository.findById(id)
    const keys = Object.keys(data || {}).length
    if (keys < 1) return null
    return data
  }
}
