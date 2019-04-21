import React, { Fragment } from 'react';

import CampaignList from './CampaignList';
import ProductList from './ProductList';
import Cart from './Cart';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <CampaignList />
        <ProductList />
        <Cart />
      </Fragment>
    );
  }
}

export default Home;
