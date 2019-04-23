import './Cart.scss';

import React from 'react';
import { Transition } from 'react-transition-group';

import { connectComponent } from '../connect';
import { Moltin } from '../services';

import Error from './Error';
import Loading from './Loading';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
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

    const duration = 300;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    }

    return (

      <Transition in={this.state.open} timeout={duration}>
        {state => (
          <div style={{ ...defaultStyle, ...transitionStyles[state]}}>
            <div className="cart">
              <header className="cart__header">
                <h3 className="cart__header--title">Shopping bag</h3>
              </header>
              {cart.items.map((product) => (
                <div key={product.id} className="cart__item">
                  <div className="cart__item--name">
                    {product.name}{' '}
                    <span className="quantity">x {product.quantity}</span>
                  </div>
                  <div className="cart__item--price">
                    {product.unit_price.amount} {product.unit_price.currency}
                  </div>
                  <button
                    className="cart__item--remove"
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
          </div>
        )}
      </Transition>
    );
  }
}

export default connectComponent(Cart);
