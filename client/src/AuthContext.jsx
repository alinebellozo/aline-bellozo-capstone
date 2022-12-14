import React, { useContext } from "react";

const AuthContext = React.createContext();

// a user might be required by a different component in the tree, so context can manage the user state

// this is to share the value of the user’s state to all the children of AuthContext
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
// both functions allow to use context

export function useAuthValue() {
  return useContext(AuthContext);
}
