import { combineReducers } from 'redux';

import { campaigns } from './campaigns';
import { products } from './products';

export default combineReducers({
	campaigns,
	products
});