import '@testing-library/jest-dom/extend-expect';

import Component from '../index';
import renderRoute from '../../../utils/testing/renderRoute';
import { fireEvent } from '@testing-library/react';

const setupRender = (props = {}, Content = Component) => {
  return renderRoute(<Content {...props} />);
};

describe('Search component test', () => {
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

  it('should change input field', async () => {
    const inputValue = 'test';
    const { getByTestId } = setupRender({
      setParams: jest.fn(),
      refetch: jest.fn(),
      loading: false,
      params: { page: 1 },
    });

    const input = getByTestId('search-user-input');

    fireEvent.change(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });
});
