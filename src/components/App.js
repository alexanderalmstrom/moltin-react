import React from 'react';
import { connectComponent } from '../connect';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount () {
		this.props.loadCampaigns();
	}

	render () {
		const { error, loading, campaigns } = this.props

		if (error) return <div>Error</div>

		if (loading) return <div>Loading...</div>

		if (!campaigns || !campaigns.items) return <div>No campaigns found.</div>

		return (
			<div>
				{campaigns.items.map((campaign) => 
					<div key={campaign.sys.id}>
						<h2>{campaign.fields.name}</h2>
						{campaign.fields.text}
					</div>
				)}
			</div>
		)
	}
}

export default connectComponent(App);