import { Button } from 'antd';

/**
 * ButtonResetComponent
 * @param {function} handleClearForm, reset form input
 * @param {function} setParams, set params state
 * @param {function} refetch, request new data
 * @param {boolean} loading, loading state
 *
 * @returns {React.Node}
 *
 */
const ButtonResetComponent = ({
  handleClearForm,
  setParams,
  refetch,
  loading,
}) => {
  return (
    <Button
      data-testid="button-reset-component"
      disabled={loading}
      type="default"
      onClick={() => {
        setParams({});
        refetch({});
        handleClearForm();
      }}
    >
      Reset filter
    </Button>
  );
};

export default ButtonResetComponent;
