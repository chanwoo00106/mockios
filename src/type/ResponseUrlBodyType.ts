import { AxiosRequestConfig } from 'axios'

type ResponseUrlBodyType = {
  [url: string]: [
    {
      [key: string]: any
    },
    AxiosRequestConfig
  ]
}

export default ResponseUrlBodyType
