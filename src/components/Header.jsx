import logo from "/assets/logo.webp";
function Header() {
  return (
    <div className=" absolute px-8 py-2 z-10">
      <img className=" w-28 " src={logo} alt="logo" />
    </div>
  );
}

export default Header;
