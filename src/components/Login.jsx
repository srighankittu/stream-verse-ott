import Header from "./Header";
import banner from "/assets/banner.webp";

function Login() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <img className="absolute" src={banner} alt="body" />

      <form className="w-3/12 absolute z-10 bg-black my-60 mx-auto right-0 left-0 bg-opacity-60 p-12 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
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
          Sign In!
        </button>
        <p className="py-4">New to Netflix? Sign Up Now!</p>
      </form>
    </div>
  );
}

export default Login;
