import React, { Fragment } from 'react';
import { connectComponent } from '../connect';

import CampaignList from './CampaignList';
import ProductList from './ProductList';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Fragment>
				<CampaignList />
				<ProductList />
			</Fragment>
		)
	}
}

export default connectComponent(App);