import './ProductList.scss';

import React from 'react';
import { connectComponent } from '../connect';

import Error from './Error';
import Loading from './Loading';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  render() {
    const {
      props: { products },
    } = this;

    if (products.error) return <Error />;

    if (products.loading) return <Loading />;

    if (!products.items.length) return null;

    return (
      <div className="product-list">
        {products.items.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    );
  }
}

export default connectComponent(ProductList);
