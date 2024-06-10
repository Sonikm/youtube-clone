import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import { faLock, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import clearIcon from "../assets/clear_icon.svg";
import { useFirebase } from "../contexts/firebase";
import googleLogo from "../assets/google_logo.svg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isShowPswd, setIsShowPswd] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const firebase = useFirebase();

  function submitForm(e) {
    e.preventDefault();

    firebase.signUpUserWithEmailAndPassword(email, password);

    console.log(firebase.isAlreadySignUp);

    if (!firebase.isAlreadySignUp) {
      firebase.putData("users/" + name, {
        email,
        password,
      });

      setEmail("");
      setPassword("");
      setName("");
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 6000);
    }
  }

  return (
    <div className="h-screen dark:bg-black dark:text-white  w-full flex flex-col items-center  p-10">
      <div className=" flex flex-col my-8 w-full max-w-[450px]  ">
        <div className="flex items-center  justify-start gap-4 w-full">
          <FontAwesomeIcon className="text-lg" icon={faArrowLeftLong} />
          <span className="w-[2px] h-7 bg-gray-300"></span>
          <h2 className="text-center text-4xl  font-bold ">Register</h2>
        </div>
        <p className="text-gray-400 text-lg">
          Please enter your information to register.
        </p>
      </div>
      <div className=" w-full dark:text-white   flex flex-col justify-center items-center">
        <form
          onSubmit={submitForm}
          className="flex flex-col gap-4 max-w-[450px] w-full "
        >
          <div className=" relative ">
            <FontAwesomeIcon
              className="text-gray-400 absolute bottom-[14px] pl-1 left-2"
              icon={faEnvelope}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1.9px] p-3 pl-9 dark:bg-black dark:focus:outline-blue-600 focus:border-none  border-gray-400  placeholder:text-gray-400 rounded-lg  focus:outline-blue-400 w-full h-full"
              type="email"
              required
              placeholder="Enter your Email"
            />
          </div>

          <div className=" relative ">
            <FontAwesomeIcon
              className="text-gray-400 absolute bottom-[14px] pl-1 left-2"
              icon={faUser}
            />

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-[1.9px] p-3 pl-9 dark:bg-black dark:focus:outline-blue-600 focus:border-none border-gray-400  placeholder:text-gray-400 rounded-lg  focus:outline-blue-400 w-full h-full"
              type="text"
              required
              placeholder="Enter your Name"
            />
            {name && (
              <img
                onClick={() => setName("")}
                className="absolute right-4 top-3 cursor-pointer"
                src={clearIcon}
                alt=""
              />
            )}
          </div>
          <div className=" relative ">
            <FontAwesomeIcon
              className="text-gray-400 absolute bottom-[14px] pl-1  left-2"
              icon={faLock}
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[1.9px] dark:bg-black dark:focus:outline-blue-600 focus:border-none p-3 pl-9 border-gray-400  placeholder:text-gray-400 rounded-lg  focus:outline-blue-400 w-full h-full"
              type={isShowPswd ? "text" : "password"}
              required
              placeholder="Enter your Password"
            />
            {password && (
              <FontAwesomeIcon
                className="absolute right-4 top-3 cursor-pointer"
                icon={isShowPswd ? faEye : faEyeSlash}
                onClick={() => setIsShowPswd(!isShowPswd)}
              />
            )}
          </div>
          <button className="bg-green-400 hover:scale-105 transition-all duration-300  p-2 font-semibold text-lg rounded-lg  ">
            Continue
          </button>
        </form>
      </div>
      <div
        onClick={() => firebase.signUpWithGoogle()}
        className="flex justify-center items-center cursor-pointer mt-4 max-w-[450px]  bg-gray-200 w-full rounded-lg"
      >
        <span className="whitespace-nowrap font-bold"> Sign In with </span>
        <img className="w-10 " src={googleLogo} alt="" />
      </div>
      <div
        className={`w-full bg-red-500 max-w-[450px] p-2 text-white  transition-opacity duration-500  mt-6 ${
          showMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        Already used this Email Id... Try using another email or sign In
      </div>
    </div>
  );
}

export default Register;
