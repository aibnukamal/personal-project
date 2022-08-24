import { Input } from 'antd';
import useDebounce from '../../hooks/useDebounce';

/**
 * SearchComponent
 * @param {function} setParams, set params state
 * @param {function} refetch, request new data
 * @param {boolean} loading, loading state
 * @param {object} params, parameter state
 *
 * @returns {React.Node}
 *
 */
const SearchComponent = ({ setParams, refetch, loading, params }) => {
  const handleSearch = (keyword) => {
    setParams({
      ...params,
      keyword,
    });
  };

  useDebounce(params.keyword, () => refetch(params));

  return (
    <Input.Search
      disabled={loading}
      placeholder="input search text"
      onChange={(e) => handleSearch(e.target.value)}
      onSearch={(keyword) => refetch({ ...params, keyword })}
      enterButton
    />
  );
};

export default SearchComponent;
