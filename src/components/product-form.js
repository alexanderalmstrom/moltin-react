// product-form.js

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

  request(form, data)
}

const request = (form, data) => {
  fetch(form.action, {
    method: form.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => console.log('Success: ', JSON.stringify(response)))
  .catch((error) => console.error(error))
}