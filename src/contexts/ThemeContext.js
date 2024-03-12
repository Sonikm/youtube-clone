import { createContext, useContext } from "react";

export const ThemeContext = createContext({
   themeMode: "light",
   darkTheme: () => {},
   lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// Custom hook to return the theme provider context
export default function useTheme(){
    return useContext(ThemeContext);
}