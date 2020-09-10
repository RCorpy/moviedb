import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/components.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Welcome from './components/Welcome'
import Populars from './components/Populars'
import ThisYear from './components/ThisYear'
import Dramas from './components/Dramas'
import Search from './components/Search'
import { Provider } from 'react-redux';
import store from './redux/store'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path="/Populars">
              <Populars />
            </Route>
            <Route path="/Dramas">
              <Dramas />
            </Route>
            <Route path="/ThisYear">
              <ThisYear />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
