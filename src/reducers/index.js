import { combineReducers } from 'redux';

import { campaigns } from './campaigns';
import { products } from './products';
import { cart } from './cart';

export default combineReducers({
	campaigns,
	products,
	cart,
});