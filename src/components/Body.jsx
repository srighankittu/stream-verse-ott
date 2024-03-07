import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Brouwe from "./Browse";
import { RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtecteedRoute";

function Body() {
  const apRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={apRouter} />
    </>
  );
}

export default Body;
