export interface Catalog {
  status: number
  message: string
  totalDocs: number
  catalogs: Catalogs
}

export interface Catalogs {
  status: string
  brand_id: number
  brand_code: string
  cover_image: string
  country_iso: string
  campaign_code: number
  featured_image: string
  heading_image: string
  id: string
}
