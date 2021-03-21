import React from 'react';
import { Switch, Route } from 'react-router-dom'; // used for page routing.
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';

function App() {
  // course section 76 4:20
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;