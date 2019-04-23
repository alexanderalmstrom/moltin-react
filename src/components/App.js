import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connectComponent } from '../connect';

import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
        <Footer />
        <Cart />
      </Fragment>
    );
  }
}

export default connectComponent(App);
