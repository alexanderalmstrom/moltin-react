// product-form.js

import { request } from '../utils/'

const productForm = document.getElementById('product-form')

productForm.addEventListener('submit', e => {
  const form = e.target

  submit(form)

  e.preventDefault()
})

const submit = form => {
  const formData = new FormData(form)

  const data = [...formData].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})

  request(form.action, data)
}