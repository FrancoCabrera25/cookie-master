import { Theme } from "@emotion/react";
import { createContext } from "react";

interface ContextProps {
  themeSelected: string;
  currentTheme: Theme;
  //function
  changeTheme: (themeName:  string) => void;
}

export const UIContext = createContext({} as ContextProps);
