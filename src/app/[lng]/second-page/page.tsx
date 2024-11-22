"use client";
import Link from "next/link";
import { useTranslation } from "@/core/i18n/client";

export default function SecondPage({ lng }: { lng: string }) {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>Back</Link>
    </>
  );
}
