import { useState } from "react";

// Simple hook to simulate authentication
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (cb) => {
    setIsAuthenticated(true);
    if (cb) cb();
  };

  const logout = (cb) => {
    setIsAuthenticated(false);
    if (cb) cb();
  };

  return { isAuthenticated, login, logout };
}