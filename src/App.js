import React from 'react';
import { Switch, Route } from 'react-router-dom'; // used for page routing.
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

// course section 76 4:20 & header course section 82 5:12
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  // AUTH CHANGES LISTENER FROM FIREBASE. SECTION 95
  // Want to close after change notification to prevent mem leaks
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
