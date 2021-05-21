import { useAuthContext } from "../../contexts/auth-context.js";
import LoginFalse from "../login/login-false.js";
import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({path, ...props}) {

  const {isLoggedIn} = useAuthContext();


  return isLoggedIn ? <Route {...props} path={path} /> : <Navigate state={{from: path}} replace to="/login"/> 
}