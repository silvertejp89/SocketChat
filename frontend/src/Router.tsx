import { createBrowserRouter } from "react-router-dom";
import { Global } from "./pages/Global";
import { Group } from "./pages/Group";
import { PageNotFound } from "./pages/PageNotFound";
import { LandingPage } from "./pages/LandingPage";

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
        path: "/Group",
        element: <Group />,
      },
    ],
  },
]);
