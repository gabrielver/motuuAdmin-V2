import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import Main from "./components/layout/Main";
import { login, logout, selectUser } from "./store/authentification/userSlice";
import Login from "./store/authentification/Login";
import { auth } from "./utils/firebase";

export function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="allApp">
      {!user ? (
        <Login />
      ) : (
        <div className="app">
       
          <Main />
        </div>
      )}
    </div>
  );
}
