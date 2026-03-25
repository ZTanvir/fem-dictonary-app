import { createContext, useContext } from "react";
import type { Theme } from "../../../utils/types";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Must be with in theme context provider");
  }
  return context;
}
