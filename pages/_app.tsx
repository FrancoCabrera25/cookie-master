import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, customTheme, lightTheme } from "../themes";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const selectedTheme =
      cookieTheme === "light"
        ? lightTheme
        : cookieTheme === "dark"
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
