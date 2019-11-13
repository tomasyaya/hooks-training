import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BouquetesProvider from './provider/BouquetesProvider';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header'; 
import Home from './view/Home/Home';

function App() {
  return (
    <Router>
        <BouquetesProvider>
          <Suspense fallback={Loader}>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
          </Suspense>
        </BouquetesProvider>
      </Router>
  );
}

export default App;
