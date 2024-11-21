"use client";
import Link from "next/link";
import { useTranslation } from "../i18n/client";

const Page = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation();
  console.log(t("title"));

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
    </>
  );
};

export default Page;
