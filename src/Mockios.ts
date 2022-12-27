import findResponse from './findResponse'
import { MockiosType } from './type'

const mockios: MockiosType = (mockData) => ({
  get: (url) => findResponse('get', url, mockData),
  post: (url) => findResponse('post', url, mockData),
  patch: (url) => findResponse('patch', url, mockData),
  put: (url) => findResponse('put', url, mockData),
  delete: (url) => findResponse('delete', url, mockData),
  head: (url) => findResponse('head', url, mockData),
  options: (url) => findResponse('option', url, mockData),
})

export default mockios
