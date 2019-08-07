/* eslint @typescript-eslint/camelcase: 0 */
import axios from 'axios'
import { Campaign } from './model'

export default class {
  async search(iso: string, region: string, zone: string): Promise<Campaign> {
    const { data } = await axios.get(
      `https://api-qa.belcorp.biz/campaigns/${iso}?region=${region}&zone=${zone}`,
      {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNyIjoiYXBwUE9DIiwiaWF0IjoxNTY1MTkyNDc4LCJleHAiOjE1NjUyNzg4Nzh9.OMXvFP8gwe_wkQrptui9WcZHN91hH2V7HG4LSl4cHcM',
        },
      }
    )
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    const { id, campaign_code, short_name, start_date, end_date } = data

    return {
      id,
      /* eslint-disable-next-line @typescript-eslint/camelcase */
      campaign_code,
      short_name,
      start_date,
      end_date,
    }
  }
}
