import { createContext, useContext, useState } from "react";
import { StorageService } from "../services/storageService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => StorageService.loadUser());

  function login(email) {
    const firstName = email.split("@")[0] || "Learner";
    const u = { firstName: firstName[0].toUpperCase() + firstName.slice(1), email };
    StorageService.saveUser(u);
    setUser(u);
  }

  function register(firstName, email) {
    const u = { firstName, email };
    StorageService.saveUser(u);
    setUser(u);
  }

  function logout() {
    StorageService.clearUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
