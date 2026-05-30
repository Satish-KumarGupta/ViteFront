import api from "../api/axios";

export const getProducts = () => {
  return api.get("/api/products");
};

export const addProduct = (data) => {
  return api.post("/api/products", data);
};

export const updateProduct = (id, data) => {
  return api.put(`/api/products/${id}`, data);
};

export const deleteProduct = (id) => {
  return api.delete(`/api/products/${id}`);
};
