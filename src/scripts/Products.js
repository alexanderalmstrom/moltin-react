// Products.js

import { Moltin } from 'services' 
import { $, $all, on } from 'utils' 

import { addToCart } from 'ProductForm'

const $products = $('.products')

Moltin.Products.All().then((response) => {
	render(response.data)
	events()
})

const render = (products) => {
	let html = products.map(item => {
		return `
			<div>
				<h2>${item.name}</h2>

				<form class="product-form" action="/api/cart/add" method="post">
					<p>
						<label>Select product</label>
						<select name="product">
							<option value="Product 1">Product 1</option>
							<option value="Product 2">Product 2</option>
							<option value="Product 3">Product 3</option>
						</select>
					</p>
					<input type="submit" value="Submit">
				</form>
			</div>
		`
	}).join('')

	$products.innerHTML = html;
}

const events = () => {
	const $productForms = $all('.product-form')

	$productForms.forEach(form => {
		if (!form.length) return

		on(form, 'submit', addToCart)
	})
}