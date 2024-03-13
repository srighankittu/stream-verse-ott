import logo from "/assets/logo.webp";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function SignOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="w-full absolute px-8 py-2 z-10 flex justify-between">
      <div>
        <img className=" w-20 " src={logo} alt="logo" />
      </div>
      <button
        onClick={SignOut}
        className="w-[100px] border border-solid border-gray-600 bg-black rounded-lg text-white bg-opacity-50"
      >
        Sign out
      </button>
    </div>
  );
}

export default Header;
