import React from 'react';
import { Switch, Route } from 'react-router-dom'; // used for page routing.
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css';

function App() {
  // course section 76 4:20 & header course section 82 5:12
  return (
    <div >
      <Header /> 
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;