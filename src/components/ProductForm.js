// ProductForm.js

import { submit } from 'utils'

import 'ProductForm.scss'

const productForm = document.getElementById('product-form')

productForm.addEventListener('submit', e => {
  const form = e.target

  submit(form)

  e.preventDefault()
})