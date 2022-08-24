import { DataProvider } from '../../context/data';
import { render } from '@testing-library/react';
import React from 'react';

/**
 * renderRoute helpers
 * @param {React.Node}
 *
 * @returns {React.Node}
 *
 */
const renderRoute = (component) => {
  return render(<DataProvider>{component}</DataProvider>);
};

export default renderRoute;
