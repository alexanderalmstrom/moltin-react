// cart.js

import { Moltin } from 'services' 

import 'cart.scss'

const cart = Moltin.Cart().Items().then(cart => {
  console.log(cart)
})