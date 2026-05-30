import { useEffect, useState } from "react";

function Navbar({ onLogin, onSignup, onOrders }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const updateAuth = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", updateAuth);

    return () => {
      window.removeEventListener("storage", updateAuth);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setToken(null);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">Ecommerce</h1>

      {!token ? (
        <div className="space-x-3">
          <button
            onClick={onLogin}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </button>

          <button
            onClick={onSignup}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={onOrders}
            className="bg-white text-black px-4 py-2 rounded"
          >
            My Orders
          </button>
          <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
