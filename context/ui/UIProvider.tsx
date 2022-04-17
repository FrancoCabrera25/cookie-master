import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import Cookies from "js-cookie";
import { FC, PropsWithChildren, useEffect, useReducer, useState } from "react";
import { UIContext, uiReducer } from ".";
import { darkTheme, customTheme, lightTheme } from "../../themes";
export interface UIstate {
  themeSelected: string;
  currentTheme: Theme;
}

const UI_INITIAL_STATE: UIstate = {
  themeSelected: '',
  currentTheme: lightTheme,
};

type Props = {};

const UIProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const changeTheme = (theme: string): void => {
    const currentTheme =
      theme === "light"
        ? lightTheme
        : theme === "dark"
        ? darkTheme
        : customTheme;
        dispatch({ type: "UI - CHANGE THEME", payload: { themeSelected: theme, currentTheme  } });
  };

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    changeTheme(cookieTheme);
  }, []);

  return (
    <UIContext.Provider
      value={{
        ...state,
        // methods
        changeTheme,
      }}
    >
      <ThemeProvider theme={state.currentTheme}>
      <CssBaseline />
        {children}
      </ThemeProvider>
    </UIContext.Provider>
  );
};

export default UIProvider;
