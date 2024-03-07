import Header from "./Header";
import banner from "/assets/banner.webp";
function Browse() {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center h-full w-full fixed top-0 left-0"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
    </div>
  );
}

export default Browse;
