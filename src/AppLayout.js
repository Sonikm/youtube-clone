import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import Body from "./components/Body";
import WatchPage from "./pages/WatchPage";
import SearchVideoListContainer from './pages/SearchVideoListContainer';
import ChannelView from './pages/ChannelView';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VideoContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/results",
          element: <SearchVideoListContainer/>
        },
      ],
    },
  ]);

function AppLayout() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppLayout