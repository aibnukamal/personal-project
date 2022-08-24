import AppLayout from './layouts';
import { DataProvider } from './context/data';
import Home from './pages/Home';

/**
 * App Component
 *
 * @returns {React.Node}
 *
 */
const App = () => {
  return (
    <DataProvider>
      <AppLayout>
        <Home />
      </AppLayout>
    </DataProvider>
  );
};

export default App;
