import './index.css';
import { Layout } from 'antd';

/**
 * Layout component
 * @param {React.Node} children
 *
 * @returns {React.Node}
 */
const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

export default AppLayout;
