// product-form.js

import { Moltin } from 'services' 
import { submit } from 'utils'

import 'product-form.scss'

export function addToCart (e) {
  e.preventDefault()

  submit(e.target)
    .then(response => {
      response = JSON.parse(response)

      Moltin.Cart().AddProduct(response.id, 1).then((res) => {
        const cartItems = res.data

        console.log(cartItems)

        alert(`Added ${response.name} to your cart`);
      });
    })
}