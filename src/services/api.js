import axios from "axios";
const baseUrl = "http://localhost:3001";

export const getProducts = async (type) => {
  return await axios.get(`${baseUrl}/product_${type}`);
};

export const getProduct = async (type, id) => {
  return await axios.get(`${baseUrl}/product_${type}/${id}`);
};

export const getCart = async (type, id) => {
  return await axios.get(`${baseUrl}/cart`);
};

export const updateCart = async (product) => {
  return await axios.put(`${baseUrl}/cart/${product.id}`, product);
};

export const postCart = async (product) => {
  const response = await axios.post(`${baseUrl}/cart`, product);
  return response.data;
};

export const deleteCart = async (product) => {
  await axios.delete(`${baseUrl}/cart/${product.id}`);
};
