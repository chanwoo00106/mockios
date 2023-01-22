import { AxiosRequestConfig, AxiosResponse } from "axios";

type QueryNotBodyType = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

export default QueryNotBodyType;
