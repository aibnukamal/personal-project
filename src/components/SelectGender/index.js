import { Select } from 'antd';

/**
 * SelectGenderComponent
 * @param {function} setParams, set params state
 * @param {function} refetch, request new data
 * @param {boolean} loading, loading state
 * @param {object} params, parameter state
 *
 * @returns {React.Node}
 *
 */
const SelectGenderComponent = ({ setParams, refetch, loading, params }) => {
  const handleChangeGender = (gender) => {
    const payload = {
      ...params,
      gender,
    };
    setParams(payload);
    refetch(payload);
  };

  return (
    <Select
      data-testid="select-gender-component"
      disabled={loading}
      defaultValue="all"
      style={{ width: 180 }}
      onChange={(value) => handleChangeGender(value)}
    >
      <Select.Option value="all">All</Select.Option>
      <Select.Option value="male">Male</Select.Option>
      <Select.Option value="female">Female</Select.Option>
    </Select>
  );
};

export default SelectGenderComponent;
