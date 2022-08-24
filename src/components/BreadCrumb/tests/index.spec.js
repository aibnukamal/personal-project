import '@testing-library/jest-dom/extend-expect';

import Component from '../index';
import renderRoute from '../../../utils/testing/renderRoute';

const setupRender = (props = {}, Content = Component) => {
  return renderRoute(<Content {...props} />);
};

describe('Breadcrumb test', () => {
  it('should render component correctly', async () => {
    const { container } = setupRender({ refetch: jest.fn() });
    expect(container).toBeInTheDocument();
  });
});
