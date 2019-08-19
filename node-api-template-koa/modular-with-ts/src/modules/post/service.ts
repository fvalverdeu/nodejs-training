import axios from 'axios'
import { Post } from './model'

export default class {
  async getAllPosts(): Promise<Post[]> {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/`
    )
    let posts: Post[]
    if (data === null) {
      posts = [
        {
          userId: 1,
          id: 1,
          title: 'default',
          body: 'lore ipsum',
        },
      ]
    } else {
      posts = data
    }
    return posts
  }

  async findPostById(idPost: number): Promise<Post> {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    )
    const { userId, id, title, body } = data
    return {
      userId,
      id,
      title,
      body,
    }
  }

  async getPostsByUserId(userId: number): Promise<Post[]> {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
    let posts: Post[]
    if (userId === 0) {
      posts = [
        {
          userId: 1,
          id: 1,
          title: 'default',
          body: 'lore ipsum',
        },
      ]
    } else {
      posts = data
    }
    return posts
  }
}
