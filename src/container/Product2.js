import React from "react";

const Category2 = ({ product2 }) => {
  return (
    <div className="category1">
      <ul>
        {product2.map((data) => (
          <li>
            <img src={data.image} />
            <h4>{data.name}</h4>
            <p>Price: {data.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category2;
