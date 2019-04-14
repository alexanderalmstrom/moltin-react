// product-form.js

import { Moltin } from 'services' 
import { submit } from 'utils'

import 'product-form.scss'

export function addToCart (e) {
  e.preventDefault()

  submit(e.target)
    .then(response => {
      Moltin.Cart().AddProduct(response.id, 1).then((cart) => {
        const cartItems = cart.data

        alert(`Added ${response.name} to your cart`);
      });
    })
}