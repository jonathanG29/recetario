import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContex = createContext();

export const useAuth = () => {
  const context = useContext(AuthContex);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAutheticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors ] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      // console.log(error.response)
      setErrors(error.response.data)
    }
  };

  const signin = async(user)=>{
    try {
      const res = await loginRequest(user)
      console.log(res);
    } catch (error) {
      if(Array.isArray(error.response.data)){
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  useEffect(() =>{
    if (errors.length > 0){
      const timer = setTimeout(() => {
        setErrors([])
      },5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  return (
    <AuthContex.Provider
      value={{
        signup,
        signin,
        isAutheticated,
        user,
        errors
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};
