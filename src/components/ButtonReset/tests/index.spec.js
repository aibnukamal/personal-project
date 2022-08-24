import '@testing-library/jest-dom/extend-expect';

import Component from '../index';
import renderRoute from '../../../utils/testing/renderRoute';
import { fireEvent } from '@testing-library/react';

const setupRender = (props = {}, Content = Component) => {
  return renderRoute(<Content {...props} />);
};

describe('ButtonReset component test', () => {
  it('should render component correctly', async () => {
    const { container } = setupRender({ refetch: jest.fn() });
    expect(container).toBeInTheDocument();
  });

  it('should clicked correctly', async () => {
    const handleClearForm = jest.fn();
    const { getByTestId } = setupRender(
      {
        handleClearForm,
        setParams: jest.fn(),
        refetch: jest.fn(),
        loading: false,
      },
      Component
    );

    const button = getByTestId('button-reset-component');

    fireEvent.click(button);

    expect(handleClearForm).toHaveBeenCalled();
  });
});
