// cart.js

import { Moltin } from 'services'
import { $, render } from 'utils'

import 'cart.scss'

Moltin.Cart().Items().then(response => {
  renderCart(response.data)
})

const renderCart = items => {
  render (
    $('.cart'),
    '<h1>Cart</h1>' +
    items.map(item => cartItem(item)).join('')
  )
}

const cartItem = item => {
  return `
    <div class="cart__item">
      ${item.name}
    </div>
  `
}