import React, { useState, useCallback, useEffect } from "react";
import { AuthContext } from "./AuthContext"; // import from separate file
import { AuthAPI } from "../lib/authApi";
import { setToken, getToken } from "../lib/apicClient";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    setToken(token);
    try {
      const user = await AuthAPI.me();
      setUser(user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setToken(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const login = async (email, password) => {
    const user = await AuthAPI.login(email, password);
    setUser(user);
  };

  const signup = async (fullname, email, password) => {
    const data = await AuthAPI.signup(fullname, email, password);
    setUser(data.user);
  };

  const logout = async () => {
    await AuthAPI.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
