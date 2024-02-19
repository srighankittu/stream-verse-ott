import Header from "./Header";
import banner from "/assets/banner.webp";
import { useState } from "react";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <div>
        <Header />
      </div>
      <img className="absolute" src={banner} alt="body" />

      <form className="w-3/12 absolute z-10 bg-black my-60 mx-auto right-0 left-0 bg-opacity-60 p-12 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full p-2 my-2 bg-gray-800 "
          />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 my-2 bg-gray-800 "
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-800"
        />
        <button className="w-full p-2 my-2 bg-red-800 rounded-lg">
          {isSignIn ? "Sign In!" : "Sign Up!"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now!"
            : "Already a user? Sign in Now!"}
        </p>
      </form>
    </div>
  );
}

export default Login;
