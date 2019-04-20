import './Cart.scss';

import React from 'react';

import { connectComponent } from '../connect';
import { Moltin } from '../services';

import Error from './Error';
import Loading from './Loading';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadCart();
  }

  removeCartItem(id, quantity) {
    Moltin.Cart()
      .RemoveItem(id, quantity)
      .then((cart) => {
        console.log(cart);
      });
  }

  render() {
    const {
      props: { cart },
    } = this;

    if (cart.error) return <Error />;

    if (cart.loading) return <Loading />;

    if (!cart.items.length) return null;

    return (
      <div className="cart">
        <h3>Cart</h3>

        {cart.items.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <span>
                {product.unit_price.amount} {product.unit_price.currency}
              </span>
            </p>
            <p>QTY: {product.quantity}</p>
            <button
              onClick={this.removeCartItem.bind(
                this,
                product.id,
                product.quantity
              )}>
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default connectComponent(Cart);
