import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <App />,
  },
  {
    path: "/posts",
    element: <h1>Post List Page</h1>,
  },
  {
    path: "/posts/:id",
    element: <h1>ID Detail Page</h1>,
  },
  {
    path: "/posts/new",
    element: <h1>new post Detail Page</h1>,
  },
  {
    path: "/posts/edit/:id",
    element: <h1>Edit Page</h1>,
  },
  {
    path: "/profile",
    element: <h1>Profile page</h1>,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
