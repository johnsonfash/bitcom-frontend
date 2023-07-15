import axios from "axios";
import { AppDispatch } from "../store";
import { DefaultAxiosResponse, RequestHook } from "../types/common";
import ENUM from "./enum";

export const reduxRequest = <T>(url: string, method: 'post' | 'delete' | 'get' | 'put' | 'patch' = 'post', reduxAction: (state: RequestHook<T>) => {
  payload: RequestHook<T>;
  type: string;
}, data?: { [key: string]: any }): any => async (dispatch: AppDispatch) => {
  try {
    dispatch(reduxAction({ loading: true }));
    const res: DefaultAxiosResponse = await axios({
      method: method,
      url: ENUM.BASE_URL + url,
      data: data,
    });
    if (res.data.status) {
      dispatch(reduxAction({ loading: false, error: false, data: res.data?.data }));
    } else {
      dispatch(reduxAction({ loading: false, error: true, message: res.data.message }));
    }
  } catch (e: any) {
    dispatch(reduxAction({ loading: false, error: true, message: e?.response?.data?.message || e?.message }));
  }
}

export const normalRequest = async (url: string, data: { [key: string]: any }, method: 'get' | 'post' | 'delete' | 'patch' | 'put' = 'post', key = '') => {
  try {
    const res: DefaultAxiosResponse = await axios({
      method: method,
      url: ENUM.BASE_URL + url,
      data: data,
    });
    if (res.data.status) {
      return { error: false, message: null, data: res?.data?.data }
    } else {
      return { error: true, message: res.data?.message, data: null }
    }
  } catch (e: any) {
    return { error: true, message: e?.response?.data?.message || e.message, data: e?.response?.data?.data || null }
  }
}