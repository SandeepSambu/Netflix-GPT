import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validate = () => {
    if (!isSignIn) {
      const message = Validate(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setMessage(message);
      if (message) return;
    } else {
      const message = Validate(email.current.value, password.current.value);
      setMessage(message);
      if (message) return;
    }

    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black bg-opacity-80 text-white my-24 mx-auto left-0 right-0 w-[450px] h-[650px] rounded-md"
      >
        <h1 className="text-4xl p-5 mx-2 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="px-28 pl-2 py-4 mx-6 my-2 rounded-md bg-black bg-opacity-60 text-white border-white border-[1px] border-opacity-10"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder={isSignIn ? "Email or Username" : "Email"}
          className="px-28 pl-2 py-4 mx-6 my-2 rounded-md bg-black bg-opacity-60 text-white border-white border-[1px] border-opacity-10"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-28 pl-2 py-4 mx-6 my-2 rounded-md bg-black bg-opacity-60 text-white border-white border-[1px] border-opacity-10"
        />
        <h3 className="mx-7 my-2 text-red-600 font-bold text-md">{message}</h3>
        <button
          className="mt-2 ml-7 my-2 bg-red-700 px-[122px] py-[7px] rounded-md font-bold"
          onClick={validate}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <span className="mx-7 flex my-4">
            New to Netflix?{" "}
            <h3
              className="mx-2 cursor-pointer font-bold"
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              Sign up now.
            </h3>
          </span>
        ) : (
          <span className="mx-7 flex my-4">
            Already a Netflix User.{" "}
            <h3
              className="mx-2 cursor-pointer font-bold"
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              Sign In
            </h3>
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
