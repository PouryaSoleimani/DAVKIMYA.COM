/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// ^ PRODUCT PDF PAGE COMPONENT ==================================================================================================================================
import poructsDetails from "@/core/constants/useProductsDetails.json";
import { useLang } from "@/core/providers/langProvider";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "@/core/i18n/client";
import { it } from "node:test";

type selectedTitle = {
  title: string;
  src: string;
  description: string[];
  products: {
    product: string;
    desc: string;
  }[];
};

const ProductDetailsPage = () => {
  const { t } = useTranslation();
  const { lng } = useLang();
  const { title, id } = useParams();

  const productTitle = id
    ? typeof id === "string"
      ? id.replaceAll("-", " ")
      : id[0].replaceAll("-", " ")
    : "";
  const mainTitle = title
    ? typeof title === "string"
      ? title.replaceAll("-", " ")
      : title[0].replaceAll("-", " ")
    : "";

  const [selectedTitle, setSelectedTitle] = useState<selectedTitle>();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    poructsDetails.map((item: selectedTitle) => {
      t(item.title) === productTitle && setSelectedTitle(item);
    });
  }, []);
  return (
    <>
      {/* <!-- article-title --> */}

      <section
        id="article-title"
        data-aos="fade-down"
        data-aos-duration="2500"
        data-sr-id="0"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1">Our Product</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href={`/${lng}/product`}
              className="d-block primary-color fw-bold text-decoration-none"
            >
              {" "}
              {t("home")}{" "}
            </Link>
            <span>/</span>
            <Link href={`/`} className="text-white-50">
              {" "}
              {t("product")}
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- articles --> */}

      <section
        id="articles"
        className="mt-5 py-5 left"
        data-aos="fade-right"
        data-aos-duration="2500"
        data-sr-id="0"
      >
        <div className="container">
          <div className="text-center">
            <span className="h3">{productTitle}</span>
          </div>
          <div className="row g-4 mt-5">
            <div className="col-md-12">
              <div className="mb-3">
                {selectedTitle?.description.map((item) => (
                  <p key={item}>{t(item)}</p>
                ))}
              </div>
              <hr />
              <h5 className="product_name_h5 text-center">
                <span className="h3 px-3">Products</span>
              </h5>
              <div className=" w-full grid grid-cols-5 gap-4  mt-4 ">
              {selectedTitle?.products.map((item) => (
                <h2
                  key={Math.random()}
                  className="product_name_h1 text-start mb-0 w-fit whitespace-nowrap "
                >
                  <Link
                    href={`/${lng}/product/${mainTitle.replaceAll(
                      " ",
                      "-"
                    )}/${productTitle.replaceAll(" ", "-")}/${item.product}`}
                  >
                    {t(item.product)}
                  </Link>
                </h2>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
