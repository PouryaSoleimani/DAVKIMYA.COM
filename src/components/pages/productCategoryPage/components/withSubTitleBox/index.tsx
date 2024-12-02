import { useTranslation } from "@/core/i18n/client";
import Link from "next/link";
import productData from "@/core/constants/useSubTitlesData.json";
import { useEffect, useState } from "react";
import { useLang } from "@/core/providers/langProvider";
interface WithSubTitleBoxProps {
  title: string;
  mainTitle: string;
}
const WithSubTitleBox = ({ title, mainTitle }: WithSubTitleBoxProps) => {
  const {lng} = useLang()
  const { t } = useTranslation();
  const [selectedTitle, setSelectedTitle] = useState<string[]>();
  console.log(mainTitle);
  useEffect(() => {
    productData.map(
      (item) => item.title === title && setSelectedTitle(item.subtitles)
    );
  }, []);
  return (
    <div className="col-xxl-3 col-md-4 col-sm-6">
      <div className="card_category">
        <div>
          <Link     href={`/${lng}/product/${mainTitle.replaceAll(" ","-")}/${t(title).replaceAll(" ","-")}`} className="title_h1">
            {t(title)}
          </Link>
          <hr />
          {selectedTitle?.map((item, index) => {
            return (
              <Link
                href={`/${lng}/product/${mainTitle.replaceAll(" ","-")}/${t(title).replaceAll(" ","-")}`}
                className="title_h5 my-3"
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
