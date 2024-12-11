import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SAMPLEIMAGE from "@/../public/images/boxes/BOX1.jpg";
import t1s1 from "@/../public/images/products__page/Adhesives-and-Sealants.jpg";
import t1s2 from "@/../public/images/products__page/paint.webp";
import t1s3 from "@/../public/images/products__page/tape-label.jpg";
import t1s4 from "@/../public/images/products__page/textile.jpg";
import t2s1 from "@/../public/images/products__page/polyol.jpg";
import t2s2 from "@/../public/images/products__page/spray.webp";
import t2s3 from "@/../public/images/products__page/foam.jpg";
import t2s4 from "@/../public/images/products__page/rigidForInsultation.jpg";
import t2s5 from "@/../public/images/products__page/pyramidFoam.jpg";
import t2s6 from "@/../public/images/products__page/bioBased.jpg";
import t4s1 from "@/../public/images/products__page/acrylic-sealant.jpg";
import t4s2 from "@/../public/images/products__page/silicon-sealants.webp";
import t4s3 from "@/../public/images/products__page/polymer-sealant.jpg";

import { useTranslation } from "@/core/i18n/client";
import { useEffect, useState } from "react";
interface NoSubTitleBoxProps {
  mainTitle: string;
  title: string;
  src: string;
}
const NoSubTitleBox = ({ mainTitle, title, src }: NoSubTitleBoxProps) => {
  const { t } = useTranslation();
  const imagesArr = [t1s1, t1s2, t1s3, t1s4,t2s1,t2s2,t2s3,t2s4,t2s5,t2s6,t4s1,t4s2,t4s3];
  const [selectedImage, setSelectedImage] = useState<StaticImageData>();

  useEffect(() => {
    imagesArr.map((item) => {
      return item.src.includes(src) && setSelectedImage(item);
    });
    console.log(selectedImage);
  }, [src]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="col-xxl-3 col-md-4 col-sm-6 h-72 w-72 min-h-72 min-w-72  max-h-72 max-w-72 mb-8 ">
      <div className="card_category">
        <div>
          <Link
            href={`${t(mainTitle.replaceAll(" ", "-"))}/${t(title).replaceAll(
              " ",
              "-"
            )}`}
            className="title_h1   tracking-tighter"
          >
            {t(title)}
          </Link>
          <hr />
          <Image
            src={selectedImage || SAMPLEIMAGE}
            width={280}
            height={200}
            alt="image"
            
            className="aspect-[1.4] "
          />
        </div>
      </div>
    </div>
  );
};
export { NoSubTitleBox };
