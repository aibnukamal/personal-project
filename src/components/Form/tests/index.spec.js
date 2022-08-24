import '@testing-library/jest-dom/extend-expect';

import Component from '../index';
import renderRoute from '../../../utils/testing/renderRoute';

const setupRender = (props = {}, Content = Component) => {
  return renderRoute(<Content {...props} />);
};

describe('Form component test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {},
        };
      },
    });
  });

  it('should render component correctly', async () => {
    const { container } = setupRender({
      handleClearForm: jest.fn(),
      setParams: jest.fn(),
      refetch: jest.fn(),
      loading: false,
      params: {},
    });
    expect(container).toBeInTheDocument();
  });
});
