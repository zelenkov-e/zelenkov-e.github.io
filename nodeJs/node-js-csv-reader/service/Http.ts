import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export default class Http {
  static getClient(config?: AxiosRequestConfig): AxiosInstance {
    let client = axios.create();

    return client;
  }

  static get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Http.getClient(config)
      .get(url, config)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Http.getClient()
      .delete(url, config)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static post(url: string, data?: Record<string, string>, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Http.getClient()
      .post(url, data, config)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  static put(url: string, data?: Record<string, string>, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Http.getClient()
      .put(url, data, config)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }
}
