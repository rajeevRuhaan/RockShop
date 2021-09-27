import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, type }) => {
  return (
    <div className="col-sm">
      <img className="card-img-top" src={product.image} alt={product.name} />
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">Price : ${product.price}</p>
        <Link to={`product/${type}/${product.id}`} class="btn btn-primary">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
