import React, { createContext, ReactNode, useState } from "react";
import User from "../model/User";

interface IAuthContext {
  authenticatedUser?: User;
  setAuthenticatedUser: (u?: User) => void;
}

const defaultState = {
  setAuthenticatedUser: (u?: User) =>
    console.log("setAuthenticatedUser is not yet defined")
};

export const AuthContext = createContext<IAuthContext>(defaultState);

interface AuthProviderProps {
  children?: ReactNode;
}

export default function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider
      value={{ authenticatedUser: user, setAuthenticatedUser: setUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
