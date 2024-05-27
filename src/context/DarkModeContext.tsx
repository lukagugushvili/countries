import { createContext, useContext } from "react";
import { ModeInter } from "../types/ContextTypes";

export const DarkModeContext = createContext<ModeInter | undefined>(undefined);

export function useDarkModeContext() {
  const theme = useContext(DarkModeContext);

  if (theme === undefined) {
    throw new Error("useDarkModeContext must be used with a DarkModeContext");
  }

  return theme;
}
