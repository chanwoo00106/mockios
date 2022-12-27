import { AxiosResponse } from 'axios'

type QueryType = <T = any>(
  url: string,
  ...args: any[]
) => Promise<AxiosResponse<T>>

export default QueryType
