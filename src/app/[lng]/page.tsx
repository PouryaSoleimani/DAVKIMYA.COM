"use client";
import Link from "next/link";
import { useTranslation } from "../../core/i18n/client";
import { useParams } from "next/navigation";

const Page = () => {
  const { lng } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
    </>
  );
};

export default Page;
