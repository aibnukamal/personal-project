import { useState, useEffect, useCallback } from 'react';
import { Modal } from 'antd';

import { useData } from '../../context/data';

/**
 * useGetUsers hooks
 * return response from api get users
 *
 * @returns {object} result object { data, loading, refetch }
 *
 */
const useGetUsers = () => {
  const [data, setData] = useState([]);
  const { onFetchData } = useData();
  const [loading, setLoading] = useState(true);

  const doGetList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await onFetchData('?page=1&results=10');

      if (res.error) {
        Modal.error({
          title: 'Server error',
          content: 'Cannot get data from server.',
        });
        setData([]);
        setLoading(false);
      } else {
        setData(res.data);
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
  }, [onFetchData]);

  useEffect(() => {
    doGetList();
  }, [doGetList]);

  return {
    data,
    loading,
    refetch: doGetList,
  };
};

export default useGetUsers;
