/* eslint-disable @typescript-eslint/no-unused-vars */
// ^ HOME PAGE COMPONENT =======================================================================================================================
"use client";
import { useTranslation } from "./../../../core/i18n/client";
import { useParams } from "next/navigation";

const HomePage = () => {
  const { lng } = useParams();
  const { t } = useTranslation();

  // a header to test bootstrap functionality
  return (
    <div className=".d-flex align-items-center justify-content-center text-center mt-30  ">
      <h1>HOME PAGE</h1>
    </div>
  );
};
export default HomePage;
