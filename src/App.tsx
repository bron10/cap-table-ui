import React from 'react';
import { HashRouter as Router, Redirect, Route, withRouter, Switch, BrowserRouter } from 'react-router-dom';
import CapSelect from './cap-select';
import CapCreate from './cap-create';
import './App.css';

function App() {
  const padd = (window.innerWidth) * 10/100
  return (
    <div className="App" style={{width:window.innerWidth - padd}}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Redirect {...props} to="/select" />;
            }}
          />
          <Route exact path="/select">
            <CapSelect />
          </Route>
          <Route path="/create" >
            <CapCreate />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
