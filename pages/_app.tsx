import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, customTheme, lightTheme } from "../themes";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { UIContext, UIProvider } from "../context/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
