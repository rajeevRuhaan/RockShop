import axios from "axios";
const baseUrl = "http://localhost:3001/category2/";

export const getAll2 = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};