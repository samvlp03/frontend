import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token and user info exist in localStorage
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }

    setIsLoading(false);
  }, []);

  const contextValue = useMemo(() => ({
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
  }), [user, isLoggedIn, isLoading]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;