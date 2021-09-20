import React from "react";
import { Button } from "react-bootstrap";
const CartProducts = ({ cartData }) => {
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
        <div>
          <Button
            variant="outline-primary"
            style={{
              backgroundColor: "red",
              width: "80px",
              height: "50px",
              color: "white",
            }}
          >
            Buy It
          </Button>
        </div>
      </ul>
    </div>
  );
};

export default CartProducts;
