import './ProductItem.scss';

import React from 'react';

import ProductForm from './ProductForm';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { id, name, description, price },
    } = this;

    return (
      <div className="product-item">
        <h2 className="product-item__name">{name}</h2>
        <p className="product-item__description">{description}</p>
        <p className="product-item__price">
          {price.map((p, i) => (
            <span key={i}>
              {p.amount} {p.currency}
            </span>
          ))}
        </p>
        <ProductForm id={id} quantity={1} />
      </div>
    );
  }
}

export default ProductItem;
