import { MockiosType } from './type'

const mockios: MockiosType = (mockData) => ({
  get: (url) => (mockData.get ? mockData.get[url] : undefined),
  post: (url) => (mockData.post ? mockData.post[url] : undefined),
  patch: (url) => (mockData.patch ? mockData.patch[url] : undefined),
  put: (url) => (mockData.put ? mockData.put[url] : undefined),
  delete: (url) => (mockData.delete ? mockData.delete[url] : undefined),
  head: (url) => (mockData.head ? mockData.head[url] : undefined),
  option: (url) => (mockData.option ? mockData.option[url] : undefined),
})

export default mockios
