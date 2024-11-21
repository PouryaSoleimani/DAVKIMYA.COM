export type Language = "en" | "de";
import { ReactNode, createContext, useContext } from "react";

interface LangContextProps {
  lng: Language;
}

const initialValue: LangContextProps = {
  lng: "en",
};

const LangContext = createContext(initialValue);

export const LangProvider = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: Language;
}) => {
  return (
    <LangContext.Provider value={{ lng }}>{children}</LangContext.Provider>
  );
};

export const useLang = () => {
  const { lng } = useContext(LangContext);
  return { lng };
};
