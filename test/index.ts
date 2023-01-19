import axios, { AxiosError } from 'axios'
import mockios, { MockDataType } from '../src'

const mockData: MockDataType = {
  get: {
    '/hello': [
      { ok: true, message: 'hello world' },
      { baseURL: 'http://localhost:3000' },
    ],
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

  it('baseURL should return localhost:3000', async () => {
    const { config } = await mockios(mockData).get('/hello')

    expect(config.baseURL).toBe('http://localhost:3000')
  })

  it('post method should throw axios error', async () => {
    try {
      await mockios(mockData).post('/')
    } catch (e: unknown | AxiosError) {
      if (!axios.isAxiosError(e)) throw new Error('is not axios error')
      expect(e).toBeInstanceOf(AxiosError)
      return
    }
    throw new Error('not throw axios error')
  })

  it('should not occurs type error', async () => {
    const query = mockios(mockData) ?? axios
    const { data } = await query.get('/hello')

    expect(data).toEqual({
      ok: true,
      message: 'hello world',
    })
  })
})
