// helpers.js

export const request = (url, data, settings = {}) => {
  const defaults = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  settings = Object.assign(defaults, settings)

  fetch(url, {
    ...settings,
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(response => console.log('SUCCESS: ', JSON.stringify(response)))
  .catch((error) => console.error(error))
}

export const submit = form => {
  const formData = new FormData(form)

  const data = [...formData].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})

  request(form.action, data)
}