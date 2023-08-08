import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => readTodosFromLocalStorage());

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function readTodosFromLocalStorage() {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
