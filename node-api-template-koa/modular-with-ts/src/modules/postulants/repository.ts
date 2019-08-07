import data from './data.json'
import { Postulant } from './model'

export default class {
  async findAll(): Promise<Postulant[]> {
    return new Promise(resolve => resolve(data))
  }

  async findById(id: number): Promise<Postulant> {
    return new Promise(resolve => {
      resolve(data.find(p => p.id == id))
    })
  }
}
