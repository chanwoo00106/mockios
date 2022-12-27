import QueryNotBodyType from './QueryNotBodyType'
import QueryType from './QueryType'

interface MethodsType {
  get: QueryNotBodyType
  head: QueryNotBodyType
  options: QueryNotBodyType
  post: QueryType
  put: QueryType
  patch: QueryType
  delete: QueryNotBodyType
  [key: string]: any
}

export default MethodsType
