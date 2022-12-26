import { MockAxiosType } from './type'

const mockAxios: MockAxiosType = (mockData) => ({
  get: (url) => mockData.get[url],
  post: (url) => mockData.post[url],
  patch: (url) => mockData.patch[url],
  put: (url) => mockData.put[url],
  delete: (url) => mockData.delete[url],
  head: (url) => mockData.head[url],
  option: (url) => mockData.option[url],
})

export default mockAxios
