import '@testing-library/jest-dom/extend-expect';

import Component from '../index';
import renderRoute from '../../../utils/testing/renderRoute';

const setupRender = (props = {}, Content = Component) => {
  return renderRoute(<Content {...props} />);
};

describe('Select gender component test', () => {
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
      setParams: jest.fn(),
      refetch: jest.fn(),
      loading: false,
      params: { page: 1 },
    });
    expect(container).toBeInTheDocument();
  });
});
