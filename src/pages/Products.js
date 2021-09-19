import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../component/Footer";
import Category1 from "../container/Category1";
import Category2 from "../container/Category2";

import { getAll } from "../services/api";
import { getAll2 } from "../services/api2";
import { GET_DATA, GET_DATA2 } from "../store/Actions";

function Products(props) {
  const dispatch = useDispatch();
  const backendData = useSelector((state) => state.red1);
  const backendData2 = useSelector((state) => state.red2);

  const loadData = async () => {
    const res = await getAll();
    console.log(res);
    dispatch({
      type: GET_DATA,
      data: res,
    });
  };

  //send data to reducer
  const loadData2 = async () => {
    const res2 = await getAll2();
    console.log(res2);
    dispatch({
      type: GET_DATA2,
      data2: res2,
    });
  };

  useEffect(() => {
    loadData();
    loadData2();
  }, []);

  return (
    <div className="products">
      <div className=" products categories">
        <h2>Category 1</h2>
        {/* getting state data from reducer */}
        <Category1 backendData={backendData} />
        <h2>Category 2</h2>
        <Category2 backendData2={backendData2} />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
