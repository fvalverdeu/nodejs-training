import supertest from 'supertest'
import server from '../../../src/server'

const app = server.listen()
const TIMEOUT = 1000 * 60

afterAll(() => {
  app.close()
})

describe("GET /campaign", () => {
  const request = supertest(app)

  it(
    "Should return a campaign",
    async () => {
      const url = '/campaign/PE?region=02&zone=2121'
      const res = await request
      .get(url)
      .expect('Content-Type', /json/)
      .expect(200)

      const data = res.body
      expect(Object.keys(data).length > 0).toBe(true)
      expect(Object.keys(data)).toEqual(
        expect.arrayContaining([
          'id',
          'campaign_code',
          'short_name',
          'start_date',
          'end_date',
        ])
      )
    },
    TIMEOUT
  )
})
