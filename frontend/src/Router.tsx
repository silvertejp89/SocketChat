import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global } from "./pages/Global";
import { Group } from "./pages/Group";
import { PageNotFound } from "./pages/PageNotFound";
import { LandingPage } from "./pages/LandingPage";
import { ChatContext } from "./contexts/ChatContext";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

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
  const storedName = localStorage.getItem("chatUserName");
  const [name, setName] = useState<string | null>(storedName || "Albert");
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    localStorage.setItem("chatUserName", name || "");
  }, [name]);

  return (
    <ChatContext.Provider value={{ name, setName, socket, setSocket }}>
      <RouterProvider router={router} />
    </ChatContext.Provider>
  );
};
