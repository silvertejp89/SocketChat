import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global } from "./pages/Global";
import { Group } from "./pages/Group";
import { PageNotFound } from "./pages/PageNotFound";
import { LandingPage } from "./pages/LandingPage";
import { SelectedUserContext } from "./contexts/SelectedUserContext";
import { useState } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        index: true,
      },
      {
        path: "/Global",
        element: <Global />,
      },
      {
        path: "/Group/:groupName",
        element: <Group />,
      },
    ],
  },
]);

export const RouterHolder = () => {
  const [name, setName] = useState<string | null>("hej");

  return (
    <SelectedUserContext.Provider value={{ name, setName }}>
      <RouterProvider router={router} />
    </SelectedUserContext.Provider>
  );
};
