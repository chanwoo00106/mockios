import { AxiosError, AxiosHeaders, AxiosResponse } from "axios";
import { MockDataType, Methods } from "./type";

const findResponse = async <T = any, R = AxiosResponse<T>, _ = any>(
  method: Methods,
  url: string,
  mockData: MockDataType
): Promise<R> => {
  const body = mockData?.[method]?.[url][0] as T;
  const config = mockData?.[method]?.[url][1];

  if (!body || !config) throw new AxiosError("Not Found Error", "404");

  const headers = new AxiosHeaders();

  return {
    status: body ? 200 : 404,
    statusText: body ? "Successfully" : "Not Found",
    config: {
      headers: headers,
      ...config,
    },
    data: body,
    headers: {},
  } as any;
};

export default findResponse;
