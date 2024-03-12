import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

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
      <div className="App dark:bg-black ">
        <Header />
      </div>
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
