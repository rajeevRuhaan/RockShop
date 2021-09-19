import axios from "axios";
const baseUrl = "http://localhost:3001/category1/";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getSinglePRoduct = async (id) => {
  const response = await axios.get(baseUrl + id);
  return response.data;
};
