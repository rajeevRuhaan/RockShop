import axios from "axios";
const baseUrl = "http://localhost:3001/cart";

export const getAllFromCart = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const AddToCart = async (sendToCart) => {
  const response = await axios.post(baseUrl, sendToCart);
  return response.data;
};
