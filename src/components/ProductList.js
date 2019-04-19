import './ProductList.scss'

import React from 'react'
import { connectComponent } from '../connect'

import ProductForm from './ProductForm'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadProducts()
  }

  render() {
    const {
      props: { error, loading, products }
    } = this

    if (error) return <div>Error</div>

    if (loading) return <div>Loading...</div>

    return (
      <div className="product-list">
        {products.items.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {product.price.map((price, index) => (
                <span key={index}>
                  {price.amount} {price.currency}
                </span>
              ))}
            </p>
            <ProductForm id={product.id} quantity={1} />
          </div>
        ))}
      </div>
    )
  }
}

export default connectComponent(ProductList)
