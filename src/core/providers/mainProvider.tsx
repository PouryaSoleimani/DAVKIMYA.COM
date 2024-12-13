import { ReactNode } from "react";
import { AddBootstrap } from "./AddBootstrap";
import { ThemeProvider } from "@material-tailwind/react"
interface MainProviderProps {
  children: ReactNode;
}
const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <>
      <ThemeProvider>
        <AddBootstrap />
        {children}
      </ThemeProvider>
    </>
  );
};
export { MainProvider };
