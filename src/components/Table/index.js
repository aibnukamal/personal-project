import './Table.css';
import { Table } from 'antd';
import PaginationComponent from '../Pagination';

/**
 * TableComponent
 * @param {function} setParams, set params state
 * @param {function} refetch, request new data
 * @param {boolean} loading, loading state
 * @param {object} params, parameter state
 * @param {array} data, table data
 *
 * @returns {React.Node}
 *
 */
const TableComponent = ({ setParams, refetch, loading, params, data = [] }) => {
  const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
      sorter: (a, b) => a.username - b.username,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a, b) => a.gender - b.gender,
    },
    {
      title: 'Registration Date',
      dataIndex: 'date',
      sorter: (a, b) => a.date - b.date,
    },
  ];

  const onChange = (_, __, sorter) => {
    const payload = {
      ...params,
      sortBy: sorter.field,
      sortOrder: sorter.order,
    };

    setParams(payload);
    refetch(payload);
  };

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={false}
        onChange={onChange}
        scroll={{ x: 820, y: 490 }}
      />
      <PaginationComponent
        params={params}
        setParams={setParams}
        refetch={refetch}
        loading={loading}
      />
    </>
  );
};

export default TableComponent;
