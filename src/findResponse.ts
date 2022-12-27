import { AxiosError, AxiosResponse } from 'axios'
import { MockDataType, Methods } from './type'

const findResponse = async (
  method: Methods,
  url: string,
  mockData: MockDataType
): Promise<AxiosResponse<any, any>> => {
  const body = mockData?.[method]?.[url][0]
  const config = mockData?.[method]?.[url][1]

  if (!body) throw new AxiosError('Not Found Error', '404', config)

  return {
    status: body ? 200 : 404,
    statusText: body ? 'Successfully' : 'Not Found',
    data: body,
    config: {
      ...config,
      method,
      url,
    },
    headers: {},
  }
}

export default findResponse
