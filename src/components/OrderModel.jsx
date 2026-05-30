import { useEffect, useState } from "react";

import { getMyOrders } from "../services/purchaseService";

const OrderModal=({ closeModal })=> {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const res = await getMyOrders();

      setOrders(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[700px] max-h-[80vh] overflow-auto rounded-xl p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">My Orders</h2>

          <button onClick={closeModal}>X</button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <p>No Orders</p>
        ) : (
          <div className="space-y-4">
            {orders.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 flex gap-4 items-center"
              >
                <img
                  src={item.productDetails?.imageUrl}
                  className="w-24 h-24 rounded object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.productDetails?.title}
                  </h3>

                  <p>₹{item.productDetails?.price}</p>

                  <p>
                    Qty:
                    {item.quantity}
                  </p>

                  <p>
                    Status:
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderModal;
