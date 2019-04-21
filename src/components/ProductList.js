import './ProductList.scss';

import React from 'react';
import { connectComponent } from '../connect';

import Error from './Error';
import Loading from './Loading';

import ProductForm from './ProductForm';

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
        {products.items.map((product) => (
          <div key={product.id} className="product-list__item">
            <h2 className="name">{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">
              {product.price.map((price, index) => (
                <span key={index}>
                  {price.amount} {price.currency}
                </span>
              ))}
            </p>
            <ProductForm id={product.id} quantity={1} />
          </div>
        ))}
      </div>
    );
  }
}

export default connectComponent(ProductList);
