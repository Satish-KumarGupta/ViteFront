import api from "../api/axios";

export const purchaseProduct = (data) => {
  return api.post("/api/purchase", data);
};

export const getMyOrders = () => {
  return api.get("/api/purchase/my-orders");
};
