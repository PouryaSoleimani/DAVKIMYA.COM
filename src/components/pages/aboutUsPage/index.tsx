/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useTranslation } from "react-i18next";
import { useLang } from "@/core/providers/langProvider";
import i18next from "i18next";

const AboutUsPage = () => {
  console.log(i18next.language)
  const { t } = useTranslation()
  const { lng } = useLang();
  
  return (
    <>
      <h1>{t("aboutUsTitle")}</h1>
    </>)
};
export default AboutUsPage;
