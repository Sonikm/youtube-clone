import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import Body from "./components/Body";
import WatchPage from "./pages/WatchPage";
import SearchVideoListContainer from "./pages/SearchVideoListContainer";
import ChannelView from "./pages/ChannelView";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUpPage";
import Register from "./pages/Register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Body />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <VideoContainer />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchVideoListContainer />,
        },
      ],
    },
  ],
  { basename: "/youtube-clone" }
);

function AppLayout() {
  return <RouterProvider router={router} />;
}

export default AppLayout;
