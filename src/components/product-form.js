// product-form.js

import { Moltin } from 'services' 
import { submit } from 'utils'
import { renderCart } from 'cart'

import 'product-form.scss'

export const addToCart = event => {
  event.preventDefault()

  submit(event.target)
    .then(response => {
      Moltin.Cart().AddProduct(response.id, 1)
        .then(cart => renderCart(cart))
    })
}