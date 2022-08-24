import { useContext, useCallback, createContext } from 'react';
import axios from 'axios';

import api from '../utils/api';
import config from '../config/app';

/**
 * Value context, manage REST operation
 */
const useValue = () => {
  const instance = axios.create({
    baseURL: config.app.apiHost,
  });

  /**
   * onFetchData, fetch data to api
   * @param {string} endpoint, url path
   * @param {object} params, parameters to be sent to api
   *
   * @returns {object} response object { error, data | message }
   *
   */
  const onFetchData = useCallback(
    async (endpoint, params) => {
      const result = await api.getAxios(instance, endpoint, params);

      return result;
    },
    [instance]
  );

  /**
   * onPostData, post data to api
   * @param {string} endpoint, url path
   * @param {object} params, parameters to be sent to api
   *
   * @returns {object} response object { error, data | message }
   *
   */
  const onPostData = useCallback(
    async (endpoint, data) => {
      const result = await api.postAxios(instance, endpoint, data);

      return result;
    },
    [instance]
  );

  /**
   * onDeleteData, delete data to api
   * @param {string} endpoint, url path
   *
   * @returns {object} response object { error, data | message }
   *
   */
  const onDeleteData = useCallback(
    async (endpoint) => {
      const result = await api.deleteAxios(instance, endpoint);

      return result;
    },
    [instance]
  );

  return {
    instance,
    onPostData,
    onFetchData,
    onDeleteData,
  };
};

const DataContext = createContext({});

/**
 * useData hooks
 *
 * @returns {object} context object { instance, onPostData, onFetchData, onDeleteData }
 *
 */
const useData = () => useContext(DataContext);

const DataProvider = (props) => {
  return <DataContext.Provider value={useValue()} {...props} />;
};

export { DataProvider, useData };
