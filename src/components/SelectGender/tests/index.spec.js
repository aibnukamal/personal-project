import '@testing-library/jest-dom/extend-expect';

import Component from '../index';
import renderRoute from '../../../utils/testing/renderRoute';

const setupRender = (props = {}, Content = Component) => {
  return renderRoute(<Content {...props} />);
};

describe('Table component test', () => {
  it('should render component correctly', async () => {
    const { container } = setupRender({
      setParams: jest.fn(),
      refetch: jest.fn(),
      loading: false,
      params: { page: 1 },
      data: [],
    });
    expect(container).toBeInTheDocument();
  });
});
