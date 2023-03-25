import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import "./style.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="a" lazy={() => import("./routes/page-a")} />
      <Route path="b" lazy={() => import("./routes/page-b")} />
      <Route path="c" lazy={() => import("./routes/page-c")} />
      <Route path="d" lazy={() => import("./routes/page-d")} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
