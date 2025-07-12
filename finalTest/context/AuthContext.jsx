import { createContext, useContext } from "react";

export const AuthContext = createContext({
  accessToken: '',
  refreshToken: ''
});


export const useAuth = () => useContext(AuthContext);