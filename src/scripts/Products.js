import { Moltin } from 'services' 

const products = Moltin.Products.All().then((products) => {
	console.log(products)
})