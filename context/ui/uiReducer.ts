
import { Theme } from "@mui/material";
import { UIstate } from "./UIProvider";

export interface UpdateTheme {
  themeSelected: string;
  currentTheme: Theme;
}

type UIActiontype =
  | { type: "UI - CHANGE THEME", payload: UpdateTheme  }

export const uiReducer = (state: UIstate, action: UIActiontype): UIstate => {
  switch (action.type) {
    case 'UI - CHANGE THEME':
      return {
        ...state,
        themeSelected: action.payload.themeSelected,
        currentTheme: action.payload.currentTheme,
      };
    default:
      return state;
  }
};
