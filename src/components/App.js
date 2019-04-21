import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connectComponent } from '../connect';

import Home from './Home';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default connectComponent(App);
