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

// to call it:
// import { useAuthValue } from "./AuthContext"

// function childOfAuthProvider(){
//   const {currentUser} = useAuthValue()
//   console.log(currentUser)

//   return ...

// now currentUser is null because its value is not being set to anything
// To set its value, we need to first get the current user from Firebase, which can be done either by using the auth instance that was initialized in firebase-config.js (auth.currentUser), or the onAuthStateChanged function, which is the recommended way. That way, we ensure that the Auth object isn’t in an intermediate state — such as initialization — when we get the current user.
