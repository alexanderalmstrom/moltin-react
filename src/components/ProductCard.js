import './ProductCard.scss';

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
      <div className="product-card">
        <h2 className="product-card__name">{name}</h2>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">
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
