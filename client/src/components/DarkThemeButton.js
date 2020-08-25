import React, { useContext } from "react";
import { useDarkTheme, useDarkThemeUpdate } from "./ThemeContextProvider.js";
// look how much simpler it is to useContext with function based components!
export default function FunctionContextComponent() {
  // instead we use the useContext hook!
  // set variable to specific context with useContext
  const darkTheme = useDarkTheme();
  const toggleTheme = useDarkThemeUpdate();
  // const toggleTheme = useThemeUpdate();
  // note the themeStyle here is simply an object
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    // in order to get context in a function we can't just wrap it in context.consumer
    <>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <button onClick={toggleTheme}> Toggle Theme!</button>
      {/* <div style={themeStyles}>Function Theme</div> */}
    </>
  );
}
