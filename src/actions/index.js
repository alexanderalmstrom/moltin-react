import { Contentful } from '../services';

export const loadCampaigns = () => ({
	type: 'GET_CAMPAIGNS',
	payload: Contentful.getEntries({
		content_type: 'campaign',
	}),
});