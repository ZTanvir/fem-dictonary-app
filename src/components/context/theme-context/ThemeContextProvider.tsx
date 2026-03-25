import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../../../utils/types";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
}
