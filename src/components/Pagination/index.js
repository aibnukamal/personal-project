import { Button, Space, Select, Form, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

/**
 * PaginationComponent
 * @param {function} setParams, set params state
 * @param {function} refetch, request new data
 * @param {boolean} loading, loading state
 * @param {object} params, parameter state
 *
 * @returns {React.Node}
 *
 */
const PaginationComponent = ({ setParams, refetch, loading, params }) => {
  const currentPage = params.page || 1;

  const handleRefetch = (value) => {
    const payload = { ...params, ...value };

    setParams(payload);
    refetch(payload);
  };

  const handleChangePage = (page) => {
    handleRefetch({ page });
  };

  const handlePrevButton = () => {
    handleChangePage(currentPage - 1);
  };

  const handleNextButton = (type) => {
    handleChangePage(currentPage + 1);
  };

  const handleChangePageSize = (results) => {
    handleRefetch({ results });
  };

  return (
    <Space style={{ float: 'right', margin: '10px 0px' }}>
      <Typography>
        Page:
        {currentPage}
      </Typography>

      <Button
        onClick={handlePrevButton}
        disabled={loading || currentPage === 1}
        data-testid="button-page-prev"
      >
        <LeftOutlined /> Prev
      </Button>
      <Button
        onClick={handleNextButton}
        disabled={loading}
        data-testid="button-page-next"
      >
        Next <RightOutlined />
      </Button>
      <Form.Item name="size" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
        <Select
          disabled={loading}
          defaultValue="10"
          style={{ width: 120 }}
          onChange={(value) => handleChangePageSize(value)}
        >
          <Select.Option value="10">10 / page</Select.Option>
          <Select.Option value="20">20 / page</Select.Option>
          <Select.Option value="50">50 / page</Select.Option>
          <Select.Option value="100">100 / page</Select.Option>
        </Select>
      </Form.Item>
    </Space>
  );
};

export default PaginationComponent;
