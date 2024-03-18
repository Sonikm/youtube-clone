import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./pages/WatchPage";
import Demo from "./components/Demo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      }
    ],
  }
  ,{
    path: "demo",
    element: <Demo/>
  }
]);

export default App;

/**
 * Head
 *   - HamBurger
 *   - Logo
 *   - SearchBar
 *   - UserProfile
 * Body
 *    Sidebar
 *      - MenuItems
 *         - History
 *         - Likes
 *         - Saves
 *         - Subscribs
 *    MainContainer
 *      - ButtonList
 *      - VideoContainer
 *         - VideoCard
 *
 */

/**
 * Head
 * Body
 *   Sidebar
 *   WatchPage
 *    - VideoContainer
 *       - Video
 *          - VideoInfo
 *          - Comments
 *
 */
