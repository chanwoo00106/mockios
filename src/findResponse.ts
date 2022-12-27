import { AxiosResponse } from 'axios'
import { MockDataType, Methods } from './type'

const findResponse = async (
  method: Methods,
  url: string,
  mockData: MockDataType
): Promise<AxiosResponse<any>> => {
  const body = mockData?.[method]?.[url]

  return {
    status: body ? 200 : 404,
    statusText: body ? 'Successfully' : 'Not Found',
    data: body,
    config: {},
    headers: {},
  }
}

export default findResponse
