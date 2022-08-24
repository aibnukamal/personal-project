import { Col, Form, Row } from 'antd';
import ButtonResetComponent from '../ButtonReset';
import SearchComponent from '../Search';
import SelectGenderComponent from '../SelectGender';

/**
 * FormComponent
 * @param {function} handleClearForm, reset form input
 * @param {function} setParams, set params state
 * @param {function} refetch, request new data
 * @param {boolean} loading, loading state
 * @param {object} params, parameter state
 *
 * @returns {React.Node}
 *
 */
const FormComponent = ({
  handleClearForm,
  setParams,
  refetch,
  loading,
  params,
}) => {
  return (
    <Row align="bottom" style={{ margin: '10px 0px' }}>
      <Col span={8}>
        <Form.Item
          name="search"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Search"
        >
          <SearchComponent
            loading={loading}
            refetch={refetch}
            params={params}
            setParams={setParams}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="gender"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="Gender"
        >
          <SelectGenderComponent
            loading={loading}
            refetch={refetch}
            params={params}
            setParams={setParams}
          />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item>
          <ButtonResetComponent
            handleClearForm={handleClearForm}
            setParams={setParams}
            refetch={refetch}
            loading={loading}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormComponent;
