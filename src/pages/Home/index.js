import { Form } from 'antd';
import { useState } from 'react';

import BreadCrumbComponent from './../../components/BreadCrumb';
import FormComponent from './../../components/Form';
import TableComponent from './../../components/Table';
import useGetUsers, { initial } from './../../hooks/useGetUsers';

/**
 * Home Component
 *
 * @returns {React.Node}
 *
 */
const Home = () => {
  const [params, setParams] = useState(initial);
  const { data, loading, refetch } = useGetUsers();
  const [form] = Form.useForm();

  const handleClearForm = () => {
    form.resetFields();
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', margin: '10px 10px' }}
    >
      <BreadCrumbComponent />
      <Form layout="inline" form={form}>
        <FormComponent
          form={form}
          params={params}
          setParams={setParams}
          refetch={refetch}
          loading={loading}
          handleClearForm={handleClearForm}
        />
        <TableComponent
          params={params}
          setParams={setParams}
          refetch={refetch}
          loading={loading}
          data={data}
          handleClearForm={handleClearForm}
        />
      </Form>
    </div>
  );
};

export default Home;
