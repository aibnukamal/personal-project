import { Space } from 'antd';

import BreadCrumbComponent from './../../components/BreadCrumb';
import FormComponent from './../../components/Form';
import TableComponent from './../../components/Table';
import useGetUsers from './../../hooks/useGetUsers';

/**
 * Home Component
 *
 * @returns {React.Node}
 *
 */
const Home = () => {
  const { data, loading, refetch } = useGetUsers();

  console.log('here data = ', data);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <BreadCrumbComponent />
      <FormComponent />
      <TableComponent />
    </Space>
  );
};

export default Home;
