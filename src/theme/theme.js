import { createTheme, ThemeProvider } from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";

export function Theme({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const mode = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
