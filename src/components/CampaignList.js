import './CampaignList.scss';

import React from 'react';
import { connectComponent } from '../connect';

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadCampaigns();
  }

  render() {
    const {
      props: { campaigns },
    } = this;

    if (campaigns.error) return <div>Error</div>;

    if (campaigns.loading) return <div>Loading...</div>;

    return (
      <div className="campaign-list">
        {campaigns.items.map((campaign) => (
          <div key={campaign.sys.id} className="campaign">
            <h2>{campaign.fields.name}</h2>
            {campaign.fields.text}
          </div>
        ))}
      </div>
    );
  }
}

export default connectComponent(CampaignList);
