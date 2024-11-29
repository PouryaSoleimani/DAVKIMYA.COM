import Image from "next/image";
import Link from "next/link";
import SAMPLEIMAGE from "@/../public/images/boxes/BOX1.jpg";
import { useTranslation } from "@/core/i18n/client";
interface NoSubTitleBoxProps {
  title: string;
  id: number;
  src?: string;
}
const NoSubTitleBox = ({ title, id, src }: NoSubTitleBoxProps) => {
  const { t } = useTranslation();
  return (
    <div className="col-xxl-3 col-md-4 col-sm-6">
      <div className="card_category">
        <div>
          <Link
            href={`/product/${title}/${id}`}
            className="title_h1 tracking-tighter"
          >
            {t(title)}
          </Link>
          <hr />
          <Image
            src={src || SAMPLEIMAGE}
            width={600}
            height={600}
            alt="image"
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};
export { NoSubTitleBox };
