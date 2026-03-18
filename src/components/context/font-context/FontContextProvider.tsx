import { useState } from "react";
import { FontContext } from "./FontContext";
import type { FontList } from "../../../utils/types";

export default function FontContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontType, setFontType] = useState<FontList>("font-sans");

  return (
    <FontContext.Provider value={{ fontType, setFontType }}>
      {children}
    </FontContext.Provider>
  );
}
