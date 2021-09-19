import React from "react";
import { useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { getSinglePRoduct } from "../services/api";
import { GET_SINGLEPRODUCT } from "../store/Actions";

const Category1 = ({ backendData }) => {
  let match = useRouteMatch();
  console.log(match);
  const dispatch = useDispatch();

  const handleSend = async (id) => {
    const res = await getSinglePRoduct(id);
    console.log(res);
    dispatch({
      type: GET_SINGLEPRODUCT,
      data: res,
    });
  };

  console.log(backendData);
  return (
    <div className="category1">
      <ul>
        {backendData.map((data) => (
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
