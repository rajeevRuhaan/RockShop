import React from "react";
import {
  GET_DATA,
  POST_DATA,
  PUT_DATA,
  DELETE_DATA,
  GET_SINGLEPRODUCT,
} from "../Actions";

const Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;

    case GET_SINGLEPRODUCT:
      return action.data;

    default:
      return state;
  }
};

export default Reducer;
