import { useState } from "react";
import { signupUser } from "../services/authService";
import toast from "react-hot-toast";
const SignupModal = ({ closeModal }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    setError("");
    if (!form.name.trim()) {
      setError("Name is required");
      return;
    }

    if (!form.email.trim()) {
      return setError("Email is required");
    }

    if (!form.password.trim()) {
      return setError("Password is required");
    }

    try {
      setLoading(true);

      const res = await signupUser(form);
      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success(res?.data?.message);

      closeModal();
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] rounded-xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-center">Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full bg-green-600 text-white py-3 rounded">
            {loading ? "Loading..." : "Signup"}
          </button>

          <button
            type="button"
            onClick={closeModal}
            className="w-full bg-gray-200 py-3 rounded"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
