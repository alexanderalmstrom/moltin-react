// ProductForm.js

import 'ProductForm.scss'

import { get, on, submit } from 'utils'

function addToCart (e) {
  e.preventDefault()
  
  submit(e.target)
    .then(response => {
      console.log(response)
    })
}

on(get('.product-form'), 'submit', addToCart)