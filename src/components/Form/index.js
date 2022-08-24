import { Button, Col, Form, Input, Row } from 'antd';

/**
 * Breadcrumb component
 */
const FormComponent = () => {
  const [form] = Form.useForm();
  const { Search } = Input;

  return (
    <Form layout="inline" form={form}>
      <Row align="bottom">
        <Col span={8}>
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            label="Search"
          >
            <Search
              placeholder="input search text"
              onSearch={() => {}}
              enterButton
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            label="Gender"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item>
            <Button type="default">Submit</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
