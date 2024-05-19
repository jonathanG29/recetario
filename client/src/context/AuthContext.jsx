import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import  Cookies from 'js-cookie';

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
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      setErrors(error.response.data)
    }
  };

  const signin = async(user)=>{
    try {
      const res = await loginRequest(user)
      setIsAuthenticated(true);
      setUser(res.data)
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

  useEffect(()=>{
    async function checkLogin() {
      const cookies = Cookies.get(); 


    if(!cookies.token){
      // console.log(setIsAuthenticated);
      setIsAuthenticated(false);
      setLoading(false);
      return setUser(null);
    }
    try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data){
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }   
      
      setIsAuthenticated(true);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      setUser(null);
      setLoading(false);
    }
    }
    checkLogin();
  }, [])

  return (
    <AuthContex.Provider
      value={{
        signup,
        signin,
        loading,
        isAutheticated,
        user,
        errors
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};
