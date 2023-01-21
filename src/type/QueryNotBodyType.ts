import { AxiosRequestConfig, AxiosResponse } from "axios";

type QueryNotBodyType = <T = any, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<AxiosResponse<T>>;

export default QueryNotBodyType;
