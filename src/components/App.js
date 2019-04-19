import React, { Fragment } from 'react'
import { connectComponent } from '../connect'

import CampaignList from './CampaignList'
import ProductList from './ProductList'
import Cart from './_Cart'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <CampaignList />
        <ProductList />
        <Cart />
      </Fragment>
    )
  }
}

export default connectComponent(App)
