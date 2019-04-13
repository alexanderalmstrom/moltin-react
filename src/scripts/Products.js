// Products.js

import { Moltin } from 'services' 
import { $, $all, on } from 'utils' 
import { addToCart } from 'ProductForm'

const $products = $('.products')

const render = (products) => {
	let html = products.map(product => {
		return `
			<div class="product">
				<h2>${product.name}</h2>
				${form()}
			</div>
		`
	}).join('')

	$products.innerHTML = html;
}

const form = () => {
	return `
		<form class="product__form" action="/api/cart/add" method="post">
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
	`
}

const events = () => {
	const $productForms = $all('.product__form')

	$productForms.forEach(form => {
		if (!form.length) return

		on(form, 'submit', addToCart)
	})
}

Moltin.Products.All().then((response) => {
	render(response.data)
	events()
})