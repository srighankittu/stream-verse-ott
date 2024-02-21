import Header from "./Header";
import banner from "/assets/banner.webp";
import { useState, useRef } from "react";
import { validate } from "../utils/validate";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  async function SignUp(fullname, email, password) {
    await fetch("http://localhost:3000/user/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullname,
        email: email,
        password: password,
      }),
    });
  }

  async function SignIn(email, password) {
    const auth = await fetch("http://localhost:3000/user/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const token = await auth.json();
    return token;
  }
  async function submitForm() {
    const curentName = isSignIn ? "" : fullName.current.value;
    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    const message = validate(
      curentName,
      currentEmail,
      currentPassword,
      isSignIn
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignIn) {
      const token = await SignIn(currentEmail, currentPassword);
      console.log(token);
    } else if (!isSignIn) {
      await SignUp(curentName, currentEmail, currentPassword);
      // console.log(signup);
      setIsSignIn(true);
    }
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <img className="absolute" src={banner} alt="body" />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute z-10 bg-black my-60 mx-auto right-0 left-0 bg-opacity-60 p-12 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={fullName}
            type="text"
            placeholder="Enter Full Name"
            className="w-full p-2 my-2 bg-gray-800 "
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-2 my-2 bg-gray-800 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-800"
        />
        <p className="text-lg text-red-600 font-bold">{errorMessage}</p>
        <button
          onClick={submitForm}
          className="w-full p-2 my-2 bg-red-800 rounded-lg"
        >
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
