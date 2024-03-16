import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import AppLayout from "./AppLayout";
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
    <Provider store={store}>
      <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
        <div className="App dark:bg-black min-h-screen w-full relative">
         <AppLayout/>
        </div>
      </ThemeProvider>
    </Provider>
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
