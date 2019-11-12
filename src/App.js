import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BouquetesProvider from './provider/BouquetesProvider';
import Loader from './components/Loader/Loader';
const Home = lazy(() => import('./view/Home/Home'));
function App() {
  return (
    <BouquetesProvider>
      <Router>
        <Suspense fallback={Loader}>
          <Route exact path='/' component={Home} />
        </Suspense>
      </Router>
    </BouquetesProvider>
  );
}

export default App;
