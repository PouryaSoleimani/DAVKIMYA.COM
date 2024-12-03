/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "@/core/i18n/client";
import { WithSubTitleBox } from "./components/withSubTitleBox";
import { NoSubTitleBox } from "./components/noSubTitleBox";
import productsData from "../../../core/constants/useproductsData.json";

type subtitle = {
  title:string,
  src:string
}

export type selectedTitle = {
  title: string;
  subtitles: subtitle[];
};
const ProductCategoryPage = () => {
  const { t } = useTranslation();
  const { title } = useParams();


  const productTitle = title
    ? typeof title === "string"
      ? title.replaceAll("-", " ")
      : title[0].replaceAll("-", " ")
    : "";

  const [selectedTitle, setSelectedTitle] = useState<selectedTitle>();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    productsData.map((item) => {
      t(item.title) === productTitle && setSelectedTitle(item);
    });
  }, []);

  return (
    <>
      {/* TITLE */}
      <section
        data-aos="fade-down"
        data-aos-duration="2500"
        id="article-title"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
        data-sr-id="0"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> Product category</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href="/en/"
              className="d-block primary-color fw-bold text-decoration-none"
            >
              Home
            </Link>
            <span>/</span>
            <Link href="/en/product" className="text-white-50">
              Product
            </Link>
          </div>
        </div>
      </section>

      {/* BOXES */}
      <section
        data-aos="fade-right"
        data-aos-duration="2500"
        id="articles"
        className="mt-5 py-5 left"
        data-sr-id="2"
      >
        <div className="container">
          <div className="text-center">
            <span className="h3">{productTitle}</span>
          </div>
          <div className="row g-4 mt-5 gap-4">
            {productTitle === t("productTitleThree")
              ? selectedTitle?.subtitles.map((item) => {
                return <WithSubTitleBox title={item.title} key={Math.random()} mainTitle={productTitle} />;
              })
              : selectedTitle?.subtitles.map((item) => {
                return (
                  <NoSubTitleBox
                    mainTitle={productTitle}
                    title={item.title}
                    src={item.src}
                    key={Math.random()}
                  />
                );
              })}
            <div className="col-md-12"></div>
          </div> 
        </div>
      </section>
    </>
  );
};
export default ProductCategoryPage;
