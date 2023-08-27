import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/productsContext";
import HomePage from "./pages/HomePage";
import PurchaseCourse from "./pages/PurchaseCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/courses/:id",
        element: <PurchaseCourse />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContextProvider>
    <RouterProvider router={router} />
  </ProductsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
