import "./CampaignList.scss";

import React from "react";
import PropTypes from "prop-types";
import { connectComponent } from "../connect";

import Error from "./Error";
import Loading from "./Loading";

class CampaignList extends React.Component {
  constructor(props) {
    super(props);

    this.props.loadCampaigns();
  }

  render() {
    const {
      props: { campaigns }
    } = this;

    if (campaigns.error) return <Error />;

    if (campaigns.loading) return <Loading />;

    if (!campaigns.items.length) return null;

    return (
      <div className="campaign-list">
        {campaigns.items.map(campaign => (
          <div key={campaign.sys.id} className="campaign">
            {campaign.fields.image ? (
              <img
                className="campaign__image"
                src={campaign.fields.image.fields.file.url}
                alt={campaign.fields.image.fields.title}
              />
            ) : null}
            <h2 className="campaign__name">{campaign.fields.name}</h2>
            <div className="campaign__text">{campaign.fields.text}</div>
          </div>
        ))}
      </div>
    );
  }
}

CampaignList.propTypes = {
  loadCampaigns: PropTypes.func,
  campaigns: PropTypes.object
};

export default connectComponent(CampaignList);
