import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BouquetesProvider from './provider/BouquetesProvider';
import Loader from './components/Loader/Loader';
import Home from './view/Home/Home';

function App() {
  return (
    <Router>
        <BouquetesProvider>
          <Suspense fallback={Loader}>
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
          </Suspense>
        </BouquetesProvider>
      </Router>
  );
}

export default App;
