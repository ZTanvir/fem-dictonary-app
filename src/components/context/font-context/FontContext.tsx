import { createContext, useContext } from "react";
import type { FontList } from "../../../utils/types";

interface FontContextType {
  fontType: FontList;
  setFontType: React.Dispatch<React.SetStateAction<FontList>>;
}

export const FontContext = createContext<FontContextType | undefined>(
  undefined,
);

export function useFontContext() {
  const fontContext = useContext(FontContext);
  if (!fontContext) {
    throw new Error(
      "font context must be used with in  <FontContext.Provider>.",
    );
  }
  return fontContext;
}
