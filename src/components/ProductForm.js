// ProductForm.js

import 'ProductForm.scss'

import { _get, _on, _submit } from 'utils'

function addToCart (e) {
  e.preventDefault()

  _submit(e.target)
    .then(response => {
      console.log(response)
    })
}

_on(_get('.product-form'), 'submit', addToCart)