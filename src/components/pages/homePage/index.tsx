/* eslint-disable @typescript-eslint/no-unused-vars */
// ^ HOME PAGE COMPONENT =======================================================================================================================
"use client";
import Header from "@/components/modules/Header";
import { useTranslation } from "./../../../core/i18n/client";
import { useParams } from "next/navigation";

const HomePage = () => {
  const { lng } = useParams();
  const { t } = useTranslation();

  // a header to test bootstrap functionality
  return (
    <div>
      <Header />
    </div>
  );
};
export default HomePage;
