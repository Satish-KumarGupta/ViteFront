import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

export const ThemeContext = createContext();
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <ThemeContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <>
        <Toaster position="top-right" />
        <Home />;
      </>
    </ThemeContext.Provider>
  );
};

export default App;
