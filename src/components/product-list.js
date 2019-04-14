// product-list.js

import { Moltin } from 'services' 
import { $, $all, on, render } from 'utils' 
import { addToCart } from 'product-form'

import 'product-list.scss'

const productEvents = () => {
	$all('.product-list__form')
		.forEach(form => on(form, 'submit', addToCart))
}

const getProducts = products => {
	render(
		$('.product-list'),
		'<h1>Products</h1>' +
		products.map(product => productItem(product)).join('')
	)
}

const productItem = product => {
	return `
		<div class="product-list__item">
			<h2>
				${product.name}
			</h2>
			${productForm(product)}
		</div>
	`
}

const productForm = product => {
	return `
		<form
			class="product-list__form"
			action="/api/cart/add"
			method="post">
			<input
				name="name"
				value="${product.name}"
				type="hidden">
			<input
				name="id"
				value="${product.id}"
				type="hidden">
			<input
				type="submit"
				value="Add to cart">
		</form>
	`
}

export const renderProducts = response => {
	Moltin.Products.All().then(products => {
		getProducts(products.data)
		productEvents()
	})
}

renderProducts()