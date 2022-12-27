import mockios, { MockDataType } from '../src'

const mockData: MockDataType = {
  get: {
    '/hello': { ok: true, message: 'hello world' },
  },
}

describe('mockios test', () => {
  it('get method should return hello world', async () => {
    const { data } = await mockios(mockData).get('/hello')

    expect(data).toEqual({
      ok: true,
      message: 'hello world',
    })
  })
  it('post method should return undefined', async () => {
    const { data } = await mockios(mockData).post('/')

    expect(data).toBe(undefined)
  })
})
