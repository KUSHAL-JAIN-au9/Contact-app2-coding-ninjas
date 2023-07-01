import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import AddContact from "./pages/AddContact";

const router = createBrowserRouter([
  {
    path: "/Contact-app2-coding-ninjas/",
    element: <App />,
    errorElement: <div>page not found</div>,
  },
  {
    path: "addContact",
    element: <AddContact />,
    errorElement: <div>page not found</div>,
  },
  {
    path: "editContact",
    element: <AddContact />,
    errorElement: <div>page not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </React.StrictMode>
);
