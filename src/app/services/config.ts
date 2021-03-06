import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';
import { ErrorCodes } from '../constants';

class ApiService {
  public request: AxiosInstance;

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: Config.API_URL,
      headers: {
        'Content-Type': 'application/json',
        Origin: '',
      },
    };

    this.request = axios.create(config);

    this.request.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error && error.response) {
          const { status } = error.response;
          if (
            status === ErrorCodes.UNAUTHORIZED ||
            status === ErrorCodes.ACCESS_DENIED ||
            status === ErrorCodes.NOT_FOUND
          ) {
            // for example logout action here
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public get<T>(url: string, params?: any, options?: {}): Promise<T> {
    const config = { params, ...options };
    return this.request.get(url, config);
  }

  public post<T>(url: string, data?: {}, options?: {}): Promise<T> {
    return this.request.post(url, data, options);
  }
}

export default new ApiService();
