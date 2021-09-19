import axios from "axios";
const baseUrl = "http://localhost:3001/cart";

export const getAllFromCart = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const AddToCart = async (singleproductdata) => {
  const cart = { ...singleproductdata };

  // const object = {
  //   ...cart,
  //   quantity: 1,
  // };
  console.log("cart before post");
  const response = await axios.post(baseUrl, cart);
  console.log("cart after post");
  return response.data;
};
