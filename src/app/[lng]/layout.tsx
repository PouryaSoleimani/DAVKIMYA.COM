import { dir } from "i18next";
import { languages } from "../../core/i18n/settings";
import { ReactNode } from "react";
import { MainProvider } from "@/core/providers/mainProvider";
import './../../../globals.css'
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppLink from "@/components/modules/WhatsAppLink";


interface paramsProps {
  lng: string | undefined;
}

interface PageProps {
  children: ReactNode;
  params: paramsProps;
}

const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

export { generateStaticParams };

const RootLayout = ({ children, params: { lng } }: PageProps) => {
  return (
    <html lang={lng} dir={dir(lng)} >
      <head />
      <MainProvider>
        <body className="overflow-x-hidden">
          <Header />
          {children}
          <WhatsAppLink />
          <Footer />
        </body>
      </MainProvider>
    </html>
  );
};

export default RootLayout;
