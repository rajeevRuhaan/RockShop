import React from "react";

const CategoryCart = ({ cartData }) => {
  return (
    <div className="item">
      <ul>
        {cartData.map((data) => (
          <li>
            <img src={data.image} />
            <h4>{data.name}</h4>
            <p>Price: {data.price}$</p>
            <p>Quantity: {data.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCart;
