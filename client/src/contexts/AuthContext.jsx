// import React, { useState, useContext, useEffect } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// export const AuthContext = React.createContext();

// export function useAuth() {
//   // to have access to the context
//   return useContext(AuthContext);
// }

// const auth = getAuth();

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   useEffect(() => {
//     // it's inside a useEffect so it only runs once
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//   };

//   return;
//   // value is whatever the value my context is
//   // everything inside the provider has access to the value prop
//   // context is for passing down props all way down into any of the children, without actually having to manually pass them into the props of each one of the components (it's like a global state of the provider's children)
//   <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
