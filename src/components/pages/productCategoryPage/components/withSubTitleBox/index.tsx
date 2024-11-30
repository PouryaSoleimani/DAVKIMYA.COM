import { useTranslation } from "@/core/i18n/client";
import Link from "next/link";
import productData from "@/core/constants/useSubTitlesData.json";
import { useEffect, useState } from "react";
interface WithSubTitleBoxProps {
  title: string;
}
const WithSubTitleBox = ({ title }: WithSubTitleBoxProps) => {
  const { t } = useTranslation();
  const [selectedTitle, setSelectedTitle] = useState<string[]>();
  useEffect(() => {
    productData.map(
      (item) => item.title === title && setSelectedTitle(item.subtitles)
    );
  }, []);
  return (
    <div className="col-xxl-3 col-md-4 col-sm-6">
      <div className="card_category">
        <div>
          <Link href="https://davkimya.com/en/product/35" className="title_h1">
            {t(title)}
          </Link>
          <hr />
          {selectedTitle?.map((item, index) => {
            return (
              <Link
                href={`/product/${t(title)}/${id}`}
                className="title_h5"
                key={index}
              >
                {t(item) || ""}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { WithSubTitleBox };
