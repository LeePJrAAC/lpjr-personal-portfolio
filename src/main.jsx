import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// routes
import { Root } from "./routes/root";
import { ErrorPage } from "./error-page";
import { About } from "./routes/about";
import { App } from "./routes/app";
import { Edit } from "./routes/app/edit";
import { Audio } from "./routes/app/audio";
import { Video } from "./routes/app/video";
import { Media } from "./routes/app/media";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/app",
        element: <App />,
        children: [
          {
            path: "/app/edit",
            element: <Edit />,
          },
          {
            path: "/app/audio",
            element: <Audio />,
          },
          {
            path: "/app/video",
            element: <Video />,
          },
          {
            path: "/app/media",
            element: <Media />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
