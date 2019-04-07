// helpers.js

export const get = (selector, scope) => {
  if (!selector) throw new Error('Provide a selector!')

  return scope ? scope.querySelector(selector) : document.querySelector(selector)
}

export const on = (element, event, callback, useCapture = false) => {
  if (!element)
    throw new Error('Please provide an element to attach the event to.')

  if (!event)
    throw new Error('Please provide an event to listen for.')

  if (!callback || typeof callback !== 'function')
    throw new Error('Please provide a valid callback function to run')

  element.addEventListener(event, callback, useCapture)
}

export const request = (url, data, settings = {}) => {
  const defaults = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  settings = Object.assign(defaults, settings)

  return fetch(url, {
      ...settings,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => JSON.stringify(response))
    .catch(error => console.error(error))
}

export const submit = form => {
  const formData = new FormData(form)

  const data = [...formData].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})

  return request(form.action, data)
}