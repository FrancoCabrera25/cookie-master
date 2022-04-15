import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, customTheme } from "../themes";
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps, ...rest }: AppProps) {




  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps =async (appContext: AppContext) => {
  
  const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any).cookies :  'light' 

  return {
    theme
  }
}

export default MyApp;
