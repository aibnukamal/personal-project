import { Table } from 'antd';

/**
 * Breadcrumb component
 */
const TableComponent = () => {
  const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
      sorter: (a, b) => a.age - b.age,
      width: '30%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.age - b.age,
      width: '40%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a, b) => a.age - b.age,
      width: '40%',
    },
    {
      title: 'Registration Date',
      dataIndex: 'date',
      sorter: (a, b) => a.age - b.age,
      width: '40%',
    },
  ];

  const data = [
    {
      username: '1',
      name: 'John Brown',
      email: 32,
      gender: 'New York No. 1 Lake Park',
      date: 'New York No. 1 Lake Park',
    },
    {
      username: '1',
      name: 'John Brown',
      email: 32,
      gender: 'New York No. 1 Lake Park',
      date: 'New York No. 1 Lake Park',
    },
    {
      username: '1',
      name: 'John Brown',
      email: 32,
      gender: 'New York No. 1 Lake Park',
      date: 'New York No. 1 Lake Park',
    },
    {
      username: '1',
      name: 'John Brown',
      email: 32,
      gender: 'New York No. 1 Lake Park',
      date: 'New York No. 1 Lake Park',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default TableComponent;
