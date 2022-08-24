import { Space } from 'antd';

import BreadCrumbComponent from './../../components/BreadCrumb';
import FormComponent from './../../components/Form';
import TableComponent from './../../components/Table';

/**
 * Home Component
 *
 * @returns {React.Node}
 *
 */
const Home = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <BreadCrumbComponent />
      <FormComponent />
      <TableComponent />
    </Space>
  );
};

export default Home;
