import { createBrowserRouter } from "react-router";

// Layouts
import { Navigation } from "../layouts/navigation/navigation";

// Pages
import { Settings } from "../pages/settings";
import { Chat } from "../pages/chat";
import { NotFoundPage } from "../pages/404";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Chat />,
      },
      {
        path: "activities",
        element: <div>Activities</div>,
      },
      {
        path: "help",
        element: <div>Help</div>,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
