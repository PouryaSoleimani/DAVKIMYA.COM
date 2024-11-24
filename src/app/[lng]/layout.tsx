import { dir } from "i18next";
import { languages } from "../../core/i18n/settings";
import { ReactNode } from "react";
import { MainProvider } from "@/core/providers/mainProvider";
import './../../../globals.css'

interface paramsProps {
  lng: string;
}

interface PageProps {
  children: ReactNode;
  params: paramsProps;
}

const generateStaticParams = () => {
  return languages.map((lng) => ({ lng }));
};

export { generateStaticParams };

const RootLayout = ({ children, params: { lng } }: PageProps) => {
  return (
    <html lang={lng} dir={dir(lng)} >
      <head />
      <MainProvider>
        <body className="overflow-x-hidden">
          {children}
        </body>
      </MainProvider>
    </html>
  );
};

export default RootLayout;
