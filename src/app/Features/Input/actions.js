import * as item from './constants'
import DataService from './Services'

export const createData = (name, price, stock, status, image_url) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('stock', stock);
      formData.append('status', status);
      formData.append('image_url', image_url);
      const res = await DataService.create(formData);
      dispatch({
        type: item.CREATE_DATA,
        payload: res.data
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const getData = () => async (dispatch) => {
    try {
      const res = await DataService.getAll();
      dispatch({
        type: item.GET_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const getDataId = (id) => async (dispatch) => {
    try {
      const res = await DataService.get(id);
      dispatch({
        type: item.GET_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const updateData = (id, data) => async (dispatch) => {
    try {
      const res = await DataService.update(id, data);
      dispatch({
        type: item.UPDATE_DATA,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const deleteData = (id) => async (dispatch) => {
    try {
      await DataService.remove(id);
      dispatch({
        type: item.DELETE_DATA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const deleteAllData = () => async (dispatch) => {
    try {
      const res = await DataService.removeAll();
      dispatch({
        type: item.DELETE_ALL_DATA,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const findDataByName = (name) => async (dispatch) => {
    try {
      const res = await DataService.findByTitle(name);
      dispatch({
        type: item.GET_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
