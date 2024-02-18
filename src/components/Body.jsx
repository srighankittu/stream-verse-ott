import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Brouse from "./Brouse";
import { RouterProvider } from "react-router-dom";

function Body() {
  const apRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/brouse",
      element: <Brouse />,
    },
  ]);
  return (
    <>
      <RouterProvider router={apRouter} />
    </>
  );
}

export default Body;
