import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <Provider store={store}>
        <div className="App dark:bg-black min-h-screen w-full ">
          <Header />
          <Body />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

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
