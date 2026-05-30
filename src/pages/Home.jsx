import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModel";

import { getProducts } from "../services/productService";
import { purchaseProduct } from "../services/purchaseService";
import toast from "react-hot-toast";

const Home=()=> {
  const [products, setProducts] = useState([]);

  const [showLogin, setShowLogin] = useState(false);

  const [showSignup, setShowSignup] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);

      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLogin(true);
      return;
    }

    try {
      const res = await purchaseProduct({
        productId: id,
        quantity: 1,
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message);
      } else {
        toast.warn(res?.data?.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        onLogin={() => setShowLogin(true)}
        onSignup={() => setShowSignup(true)}
        onOrders={() => setShowOrders(true)}
      />

      {/* Modals */}
      {showLogin && <LoginModal closeModal={() => setShowLogin(false)} />}

      {showSignup && <SignupModal closeModal={() => setShowSignup(false)} />}
      {showOrders && <OrderModal closeModal={() => setShowOrders(false)} />}

      {/* Product List */}
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {console.log(products)}

            {products?.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
