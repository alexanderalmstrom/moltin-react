// ProductForm.js

import 'ProductForm.scss'

import { submit } from 'utils'

export function addToCart (e) {
  e.preventDefault()

  submit(e.target)
    .then(response => {
      console.log(response)
    })
}