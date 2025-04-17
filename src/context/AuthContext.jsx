// src/context/AuthContext.js

import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import api from '../services/apiServices';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Logout
  const logout = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  // Register
  const register = useCallback(async (userData) => {
    try {
      const response = await api.register(userData);
      const { user: registeredUser } = response.data;

      localStorage.setItem('user', JSON.stringify(registeredUser));
      setUser(registeredUser);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      logout();
      return false;
    }
  }, [logout]);

  // Login
  const login = useCallback(async (credentials) => {
    try {
      const response = await api.login(credentials);
      const { user: userData } = response.data;

      localStorage.setItem('user', JSON.stringify(userData));
  
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      logout();
      return false;
    }
  }, [logout]);

  // Auto-authenticate on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        } else {
          logout();
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [logout]);

  const contextValue = useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register,
  }), [user, isAuthenticated, isLoading, login, logout, register]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
