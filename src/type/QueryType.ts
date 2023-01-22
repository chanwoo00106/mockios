import { AxiosRequestConfig, AxiosResponse } from "axios";

type QueryType = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

export default QueryType;
