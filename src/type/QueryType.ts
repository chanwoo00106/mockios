import { AxiosRequestConfig, AxiosResponse } from 'axios'

type QueryType = <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<AxiosResponse<T>>

export default QueryType
