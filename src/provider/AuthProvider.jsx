import { useState } from "react";
import { AuthContext } from "./authContext";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Hello",
    email: "ami@tumi.com",
  });

  const authInfo = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;
