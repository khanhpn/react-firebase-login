import React, {useState, useMemo, useEffect} from "react";
import firebase from "firebase";
import Login from "./Login";
import {firebaseApp} from "../Base";

const User = () => {
  const [userInfo,
    setUserInfo] = useState({email: null, displayName: ""});

  const authHandler = async(authData) => {
    console.log("AuthData:" + JSON.stringify(authData));
    const user = authData.user;
    setUserInfo((prevValue) => ({
      ...prevValue,
      email: user.email,
      displayName: user.displayName
    }));
  };

  const authenticate = (provider) => {
    console.log("Provider:" + JSON.stringify(provider));
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler);
  };

  const logout = async() => {
    console.log("logout");
    await firebase
      .auth()
      .signOut();
    setUserInfo((prevState) => ({
      ...prevState,
      email: null,
      displayName: null
    }));
  };

  const btnLogout = <button onClick={logout}>Logout</button>;

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log("user:" + user);
        if (user) {
          authHandler({user});
        }
      });
  }, []);

  if (!userInfo.email) {
    return <Login authenticate={authenticate}/>;
  }
  return (
    <div className="user-info">
      <label>Email: {userInfo.email}</label>
      {btnLogout}
    </div>
  );
};

export default User;
