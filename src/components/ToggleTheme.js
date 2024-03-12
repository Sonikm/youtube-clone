import React from "react";
import useTheme from "../contexts/ThemeContext";

function ToggleTheme() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  function onChangeTheme(e) {
    console.log(e.currentTarget.checked);
    console.log(themeMode);

    const themeStatus = e.currentTarget.checked;
    if (themeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  }

  return (
    <input
      onChange={onChangeTheme}
      id="toggle"
      className="toggle"
      type="checkbox"
      checked={themeMode === "dark"}
    />
  );
}

export default ToggleTheme;
