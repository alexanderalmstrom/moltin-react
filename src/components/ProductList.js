import React from 'react';
import { connectComponent } from '../connect';

import './ProductList.scss';

class ProductList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  render () {
    const {
      props: {
        error,
        loading,
        products,
      }
    } = this

		if (error) return <div>Error</div>

		if (loading) return <div>Loading...</div>

    return (
      <div className="product-list">
        {products.items.map((product) => 
					<div key={product.id} className="product">
						<h2>{product.name}</h2>
					</div>
				)}
      </div>
    )
  }
}

export default connectComponent(ProductList);