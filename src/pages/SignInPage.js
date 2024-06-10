import React, { useState } from "react";
import { useFirebase } from "../contexts/firebase";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();

  function submitForm(e) {
    e.preventDefault();
    firebase.signInUserWithEmailAndPassword(email, password);
    firebase.putData("users/", {
      email,
      password,
    });

    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex justify-center items-center flex-col ">
      <form
        onSubmit={submitForm}
        className="flex justify-center items-center flex-col "
      >
        <h2 className="font-bold text-3xl">SignIn</h2>
        <div className="border-2 border-gray-500 m-6 p-4 flex flex-col gap-3">
          <p>
            <label>Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-gray-300 ml-2 p-1"
              type="email"
              placeholder="enter your email.."
            ></input>
          </p>

          <p>
            <label>Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-2 border-gray-300 ml-2 p-1"
              type="password"
              placeholder="enter your password.."
            ></input>
          </p>
          <button className="bg-green-500  text-white p-1">SignIn</button>
        </div>
      </form>
      <button
        onClick={() => firebase.SignInWithGoogle()}
        className="bg-yellow-500  text-white p-1"
      >
        SignIn with google
      </button>
      <button onClick={firebase.signOutUser}>logout</button>
    </div>
  );
}

export default SignInPage;
