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
        <header className="cart__header">
          <h3 className="cart__header-title">Shopping bag</h3>
        </header>
        {cart.items.map((product) => (
          <div key={product.id} className="cart__item">
            <div className="name">
              {product.name}{' '}
              <span className="quantity">x {product.quantity}</span>
            </div>
            <div className="price">
              {product.unit_price.amount} {product.unit_price.currency}
            </div>
            <button
              className="remove"
              onClick={this.removeCartItem.bind(
                this,
                product.id,
                product.quantity
              )}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default connectComponent(Cart);
