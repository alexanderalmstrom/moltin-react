// ProductForm.js

import 'ProductForm.scss'

import { submit } from 'utils'

const form = document.getElementById('product-form')

form.addEventListener('submit', e => {
  e.preventDefault()

  submit(e.target).then(res => console.log(res))
})
