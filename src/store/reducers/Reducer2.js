// import React from "react";
import { GET_DATA2 } from "../Actions";

const Reducer2 = (state = [], action) => {
  switch (action.type) {
    case GET_DATA2:
      return action.data2;

    default:
      return state;
  }
};

export default Reducer2;
