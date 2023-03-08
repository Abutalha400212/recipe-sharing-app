import auth from "@/firebase/firebaseConfig";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export default function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser({});
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = async (name) => {
    setLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const logOut = async () => {
    setLoading(true);
    setUser({});
    await signOut(auth);
  };
  const authDoc = {
    user,
    register,
    login,
    logOut,
    updateUser,
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={authDoc}>{children}</AuthContext.Provider>
  );
}
