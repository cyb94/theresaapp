import AppAPI from '../index';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const getRequest = async <T>(
  url: string,
  params?: any,
  body?: any,
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {};
    if (params) {
      config.params = params;
    }
    if (body) {
      config.data = body;
    }
    let response = await AppAPI.get<T>(url, config);
    return response.data;
  } catch (error: any | AxiosError) {
    console.log('error', error);
    throw new Error(error);
  }
};

const postRequest = async <T>(
  url: string,
  body: any,
  onSuccess?: (data?: any) => void,
  onError?: (data?: any) => void,
  params?: any,
): Promise<T> => {
  try {
    let response = await AppAPI.post<T>(url, body, {});
    console.log('response', response);
    return response.data;
  } catch (error: any) {
    console.log('error', error?.request);
    throw new Error(error);
  }
};

const patchRequest = async <T>(
  url: string,
  body: any,
  onError?: (data: any) => void,
  token?: string,
  params?: any,
): Promise<T> => {
  try {
    let response = await AppAPI.patch<T>(url, body, {});
    return response.data;
  } catch (error: any | AxiosError) {
    onError && onError(error);
    throw new Error(error);
  }
};

const deleteRequest = async <T>(
  url: string,
  onSuccess?: (data?: any) => void,
  onError?: (data?: any) => void,
): Promise<T> => {
  try {
    let response = await AppAPI.delete<T>(url, {});
    if (response.status === 200 || response.status === 204) {
      onSuccess && onSuccess(response);
      return response.data;
    }
    return response.data;
  } catch (error: any | AxiosError) {
    throw new Error(error);
  }
};

const optionsRequest = async <T>(
  url: string,
  onSuccess?: (data?: any) => void,
  onError?: (data?: any) => void,
): Promise<T> => {
  try {
    let response = await AppAPI.delete<T>(url, {});
    if (response.status === 200 || response.status === 204) {
      onSuccess && onSuccess(response);
      return response.data;
    }
    return response.data;
  } catch (error: any | AxiosError) {
    throw new Error(error);
  }
};

const putRequest = async <T>(
  url: string,
  onSuccess?: (data?: any) => void,
  onError?: (data?: any) => void,
): Promise<T> => {
  try {
    let response = await AppAPI.delete<T>(url, {});
    if (response.status === 200 || response.status === 204) {
      onSuccess && onSuccess(response);
      return response.data;
    }
    return response.data;
  } catch (error: any | AxiosError) {
    throw new Error(error);
  }
};
export {
  getRequest,
  postRequest,
  deleteRequest,
  patchRequest,
  optionsRequest,
  putRequest,
};
