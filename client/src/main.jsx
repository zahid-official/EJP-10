import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import AuthProver from "./Components/Auth/AuthProver";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProver>
      <RouterProvider router={Router} />
    </AuthProver>
  </StrictMode>
);
