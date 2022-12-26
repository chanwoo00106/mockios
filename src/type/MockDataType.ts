import ResponseUrlBodyType from './ResponseUrlBodyType'

interface MockDataType {
  get?: ResponseUrlBodyType
  post?: ResponseUrlBodyType
  put?: ResponseUrlBodyType
  patch?: ResponseUrlBodyType
  head?: ResponseUrlBodyType
  delete?: ResponseUrlBodyType
  option?: ResponseUrlBodyType
}

export default MockDataType
