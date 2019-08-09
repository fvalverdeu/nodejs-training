/* eslint @typescript-eslint/camelcase: 0 */
import axios from 'axios'
import { Catalog } from './model'

export default class {
  async search(iso: string, campaignCode: string): Promise<Catalog> {
    const { data } = await axios.get(
      `https://api-qa.belcorp.biz/catalogs/${iso}?campaign_code=${campaignCode}`,
      {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNyIjoiYXBwUE9DIiwiaWF0IjoxNTY1MTkyNDc4LCJleHAiOjE1NjUyNzg4Nzh9.OMXvFP8gwe_wkQrptui9WcZHN91hH2V7HG4LSl4cHcM',
        },
      }
    )
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    const { status, message, totalDocs, results } = data

    return {
      status,
      message,
      totalDocs,
      catalogs: {
        status: results.status,
        brand_id: results.brand_id,
        brand_code: results.brand_code,
        cover_image: results.cover_image,
        country_iso: results.country_iso,
        campaign_code: results.campaignCode,
        featured_image: results.featured_image,
        heading_image: results.heading_image,
        id: results.id,
      },
    }
  }
}
