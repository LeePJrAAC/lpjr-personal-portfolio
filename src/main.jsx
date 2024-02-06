import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// routes
import { Root } from "./routes/root";
import { ErrorPage } from "./error-page";
import { About } from "./routes/about";
import { App, loader as appLoader, action as appAction } from "./routes/app";
import { Edit, action as editAction } from "./routes/app/edit";
import { Media, loader as mediaLoader } from "./routes/app/media";
import { action as destroyAction } from "./routes/app/destroy";
import { Audio } from "./routes/app/audio";
import { Video } from "./routes/app/video";

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
        loader: appLoader,
        action: appAction,
        children: [
          {
            path: "/app/:mediaId",
            element: <Media />,
            loader: mediaLoader,
          },
          {
            path: "/app/:mediaId/edit",
            element: <Edit />,
            loader: mediaLoader,
            action: editAction,
          },
          {
            path: "/app/:mediaId/destroy",
            action: destroyAction,
          },
          {
            path: "/app/audio",
            element: <Audio />,
          },
          {
            path: "/app/video",
            element: <Video />,
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
