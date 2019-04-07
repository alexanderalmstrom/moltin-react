// ProductForm.js

import 'ProductForm.scss'

import { get, on, submit } from 'utils'

function addToCart (e) {
  e.preventDefault()
  submit(e.target).then(res => console.log(res))
}

on(get('.product-form'), 'submit', addToCart)