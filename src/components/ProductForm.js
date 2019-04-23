import './ProductForm.scss';

import React from 'react';
import { connectComponent } from '../connect';
import { Moltin } from '../services';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart(id, quantity) {
    Moltin.Cart()
      .AddProduct(id, quantity)
      .then((cart) => {
        console.log(cart);
      });
  }

  render() {
    const {
      props: { id, quantity },
    } = this;

    return (
      <div className="product-form">
        <button
          className="product-form__btn"
          onClick={this.addToCart.bind(this, id, quantity)}>
          Add to cart
        </button>
      </div>
    );
  }
}

export default connectComponent(ProductForm);
