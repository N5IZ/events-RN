import React, { useCallback } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { logout, login } from "../redux/slices/userSlice";

export function useAuthentication() {
  // const [user, setUser] = React.useState<User>();

  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const logout = useCallback(() => dispatch({ type: "logout" }), []);

  React.useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // setUser(user);
        dispatch(() => login(user));
      } else {
        // User is signed out
        // setUser(undefined);
        dispatch(() => logout());
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
