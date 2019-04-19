import './ProductForm.scss'

import React from 'react'
import { Moltin } from '../services'
import { connectComponent } from '../connect'

import './Cart.scss'

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
  }

  addToCart(id, quantity) {
    Moltin.Cart()
      .AddProduct(id, quantity)
      .then(cart => {
        console.log(cart)
      })
  }

  render() {
    const {
      props: { id, quantity }
    } = this

    return (
      <div className="product-form">
        <button onClick={this.addToCart.bind(this, id, quantity)}>
          Add to cart
        </button>
      </div>
    )
  }
}

export default connectComponent(ProductForm)
