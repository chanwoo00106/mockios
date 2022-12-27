import { MockDataType } from 'mockios'

const mockData: MockDataType = {
  get: {
    '/hello': [{ ok: true, message: 'hello world' }, {}],
  },
}

export default mockData
