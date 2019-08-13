import axios from 'axios'
import { Post } from './model'

export default class {
  async getAllPost(): Promise<Post> {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/`
    )
    const { userId, id, tittle, body } = data
    return {
      userId,
      id,
      tittle,
      body,
    }
  }
}
