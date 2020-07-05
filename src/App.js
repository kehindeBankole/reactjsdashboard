import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { First } from '../src/pages/First'
import { Second } from '../src/pages/Second'
import { Nav } from '../src/component/Nav'
import '../src/style/index.css'
import '../src/style/bootstrap.min.css'
import '../src/style/fontawesome-free-5.13.0-web/css/all.css'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={First} exact />
        <Route path="/second" component={Second} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
