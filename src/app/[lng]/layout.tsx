import { dir } from "i18next";
import { languages } from "../../core/i18n/settings";
import { ReactNode } from "react";
import { MainProvider } from "@/core/providers/mainProvider";
import './../../../globals.css'
import "react-bootstrap-submenu/dist/index.css"
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppLink from "@/components/modules/WhatsAppLink";
import * as React from 'react'


const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

export { generateStaticParams };
interface RootProps { children: React.ReactNode, params: { lng: any } }

const RootLayout: React.FC<RootProps> = async ({ children, params }: RootProps) => {
  const LNG = await params?.lng;


  return (
    <html lang={LNG} dir={dir(LNG)} >
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
