import React, { Fragment } from "react";

import CampaignList from "./CampaignList";
import ProductList from "./ProductList";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <CampaignList />
        <ProductList />
      </Fragment>
    );
  }
}

export default Home;
