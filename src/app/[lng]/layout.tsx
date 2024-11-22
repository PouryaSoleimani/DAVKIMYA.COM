import { dir } from "i18next";
import { languages } from "../../core/i18n/settings";
import { ReactNode } from "react";

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
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
