import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const localData = localStorage.getItem("auth");
    try {
      const parseData = JSON.parse(localData);
      if (parseData) {
        setAuth(() => ({
          ...auth,
          user: parseData,
        }));
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }

    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);


export { useAuth, AuthProvider };
