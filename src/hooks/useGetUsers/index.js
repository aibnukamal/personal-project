import { useState, useEffect, useCallback } from 'react';
import { Modal } from 'antd';

import { useData } from '../../context/data';
import { formatDate } from '../../utils/date';

export const initial = {
  page: 1,
  pageSize: 10,
  results: 10,
};

/**
 * buildParams helpers
 * build query string url paramter
 * @param {object} obj, url parameter
 *
 * @returns {string} url string
 *
 */
const buildParams = (obj) => {
  return new URLSearchParams(obj).toString();
};

/**
 * normalizeData helpers
 * transform response to users data
 * @param {object} data, object data
 *
 * @returns {array} data
 *
 */
const normalizeData = (data) => {
  const response = data.results.map((item, index) => {
    const { title, first, last } = item.name;

    return {
      key: index.toString(),
      username: item.login.username,
      name: [title, first, last].join(' '),
      email: item.email,
      gender: item.gender,
      date: formatDate(item.registered.date),
    };
  });

  return response;
};

/**
 * useGetUsers hooks
 * return response from api get users
 *
 * @returns {object} result object { data, loading, refetch }
 *
 */
const useGetUsers = (initialValue = {}) => {
  const [data, setData] = useState([]);
  const { onFetchData } = useData();
  const [loading, setLoading] = useState(true);

  const doGetList = useCallback(
    async (params = {}) => {
      setLoading(true);

      try {
        const payload = buildParams({ ...initial, ...initialValue, ...params });

        const res = await onFetchData(`?${payload}`);

        if (res.error) {
          Modal.error({
            title: 'Server error',
            content: 'Cannot get data from server.',
          });
          setData([]);
          setLoading(false);
        } else {
          const normalize = normalizeData(res.data.data);

          setData(normalize);
          setLoading(false);
        }
      } catch (error) {
        Modal.error({
          title: 'Server error',
          content: 'Cannot get data from server.',
        });
        setData([]);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onFetchData]
  );

  useEffect(() => {
    doGetList(initial);
  }, [doGetList]);

  return {
    data,
    loading,
    refetch: doGetList,
  };
};

export default useGetUsers;
