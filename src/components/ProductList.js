import "./ProductList.scss";

import React from "react";
import PropTypes from "prop-types";
import { connectComponent } from "../connect";

import Error from "./Error";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.props.loadProducts();
  }

  render() {
    const {
      props: { products }
    } = this;

    if (products.error) return <Error />;

    if (products.loading) return <Loading />;

    if (!products.items.length) return null;

    return (
      <div className="product-list">
        {products.items.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  loadProducts: PropTypes.func,
  products: PropTypes.object
};

export default connectComponent(ProductList);
