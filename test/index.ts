import mockios, { MockDataType } from '../src'

const mockData: MockDataType = {
  get: {
    '/hello': { ok: true, message: 'hello world' },
  },
  post: {},
  patch: {},
  head: {},
  option: {},
  put: {},
  delete: {},
}

describe('mockios test', () => {
  it('get method should return hello world', () => {
    expect(mockios(mockData).get('/hello')).toEqual({
      ok: true,
      message: 'hello world',
    })
  })
})
