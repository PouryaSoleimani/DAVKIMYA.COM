import { ReactNode } from "react";
import { AddBootstrap } from "./AddBootstrap";

interface MainProviderProps {
  children: ReactNode;
}
const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <>
      <AddBootstrap />
      {children}
    </>
  );
};
export { MainProvider };
