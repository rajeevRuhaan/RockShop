import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../component/Footer";
import Product1 from "../container/Product1";
import Product2 from "../container/Product2";

import { getAll } from "../services/api";
import { getAll2 } from "../services/api2";
import { GET_DATA, GET_DATA2 } from "../store/Actions";

function Products(props) {
  const dispatch = useDispatch();
  const product1 = useSelector((state) => state.product1Reducer);
  const product2 = useSelector((state) => state.product2Reducer);

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
        <h2>Product 1</h2>
        {/* getting state data from reducer */}
        <Product1 product1={product1} />
        <h2>Product 2</h2>
        <Product2 product2={product2} />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
