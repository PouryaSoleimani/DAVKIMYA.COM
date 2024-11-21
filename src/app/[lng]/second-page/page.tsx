import Link from "next/link";
import { useTranslation } from "../../i18n";

export default async function SecondPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation();
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>Back</Link>
    </>
  );
}
