import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Google authentication</h1>
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  );
};

export default SignIn;
