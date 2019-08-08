/* eslint @typescript-eslint/camelcase: 0 */
import axios from 'axios'
import { Catalog } from './model'

export default class {
  async search(iso: string, code: string): Promise<Catalog> {
    const { data } = await axios.get(
      'https://api-qa.belcorp.biz/catalogs/PE?campaign_code=201911',
      {
        headers: {
          'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNyIjoiYXBwUE9DIiwiaWF0IjoxNTY1MTkyNDc4LCJleHAiOjE1NjUyNzg4Nzh9.OMXvFP8gwe_wkQrptui9WcZHN91hH2V7HG4LSl4cHcM'
        },
      }
    )
  }
}
