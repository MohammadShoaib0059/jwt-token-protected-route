import { createContext, useReducer } from "react";
import { isAuthenticated, login, logout } from "../Token/Auth";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: isAuthenticated(),
};
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true };
    case "LOGOUT":
      return { isAuthenticated: false };
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const handlelogin = (username, password) => {
    login(username, password);
    dispatch({ type: "LOGIN" });
  };
  const handlelogout = () => {
    logout();
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{ ...state,  handlelogin,  handlelogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

