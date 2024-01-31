import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Chat = lazy(() => import("../pages/Chat"));

const routes = [
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

export { routes };
