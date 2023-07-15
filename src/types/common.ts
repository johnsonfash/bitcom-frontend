export interface RequestHook<T = any> {
  loading?: boolean
  error?: boolean
  message?: string | null
  data?: T
}

export interface DefaultAxiosResponse {
  data: {
    data: any
    message: string,
    status: boolean
  }
}