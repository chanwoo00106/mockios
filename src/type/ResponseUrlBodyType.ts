import {RawAxiosRequestConfig} from "axios"

type ResponseUrlBodyType = {
  [url: string]: [
    {
      [key: string]: any
    },
    RawAxiosRequestConfig
  ]
}

export default ResponseUrlBodyType
