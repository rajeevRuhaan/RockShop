import React from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { getSinglePRoduct } from "../services/api";
import { GET_SINGLEPRODUCT } from "../store/Actions";

const Category1 = ({ product1 }) => {
  let match = useRouteMatch();
  console.log(match);
  const dispatch = useDispatch();

  const handleSend = async (id) => {
    const res = await getSinglePRoduct(id);
    dispatch({
      type: GET_SINGLEPRODUCT,
      data: res,
    });
  };

  console.log(product1);
  return (
    <div className="category1">
      <ul>
        {product1.map((data) => (
          <Link to={`${match.url}/${data.id}`}>
            <li onClick={() => handleSend(data.id)}>
              <img src={data.image} />
              <h4>{data.name}</h4>
              <p>Price: {data.price}$</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category1;
