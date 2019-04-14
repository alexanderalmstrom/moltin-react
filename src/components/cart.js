// cart.js

import { Moltin } from 'services'
import { $, $all, render, on } from 'utils'

import 'cart.scss'

const getCart = items => {
  render (
    $('.cart'),
    '<h1>Cart</h1>' +
    items.map(item => cartItem(item)).join('')
  )
}

const cartItem = item => {
  return `
    <div class="cart__item">
      <h3 class="name">${item.name}</h3>
      <p class="qty">QTY: ${item.quantity}</p>
      <button
        class="remove"
        data-id="${item.id}"
        data-quantity="${item.quantity}">
        X
      </button>
    </div>
  `
}

const cartEvents = () => {
  $all('.cart__item .remove')
    .forEach(btn => on(btn, 'click', removeCartItem))
}

const removeCartItem = event => {
  event.preventDefault()

  const btn = event.target
  const item = btn.parentNode

  const id = btn.getAttribute('data-id')
  const quantity = btn.getAttribute('data-quantity') || 1

  Moltin.Cart()
    .RemoveItem(id, quantity)
    .then(cart => {
      item.remove()
    })
}

export const renderCart = response => {
  if (response && Object.keys(response).length) {
    getCart(response.data)
    cartEvents()
    return
  }

  Moltin.Cart().Items().then(response => {
    if (Object.keys(response.data).length) {
      getCart(response.data)
      cartEvents()
    }
  })
}

renderCart()