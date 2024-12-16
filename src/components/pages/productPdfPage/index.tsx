import Link from "next/link";
import poructsDetails from "@/core/constants/useProductsDetails.json";
import { useTranslation } from "@/core/i18n/client";
import { FaArrowRight } from "react-icons/fa";
import PdfDownloadButton from "@/components/modules/PdfDownloadButton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductDetailsPage from "../productDetailsPage";

// COMPONENT ====================================================================================================================================================================
const ProductPdfPage = () => {
  const { t } = useTranslation();
  const { pdf, id } = useParams();
  const product = pdf ? (typeof pdf === "string" ? pdf : pdf[0]) : "";

  const mainTitle = id ? (typeof id === "string" ? id : id[0]) : "";

  const [selectedProduct, setSelectedProduct] = useState<{
    product: string;
    desc: string;
  }>();

  useEffect(() => {
    poructsDetails.map((item) =>
      item.products.map(
        (item) => item.product === product && setSelectedProduct(item)
      )
    );
  });
  return (
    <>
      <section
        id="post-title"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> {t(selectedProduct?.product || "")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href={`/en`}
              className="d-block text-lime-400 fw-bold text-decoration-none"
            >
              {t("home")}
            </Link>
            <span>/</span>
            <span className="text-white-50">{t("product")}</span>
          </div>
        </div>
      </section>
      {/* <!-- single service --> */}
      <section id="single-service" className="container my-5 left">
        <div className="row g-4">
          <div className="col-lg-8">
            <h1 className="fw-bold my-3 text-4xl">
              {t(selectedProduct?.product || "")}
            </h1>
            <div>
              <hr />
              <p>{selectedProduct?.desc}</p>
              <hr />

              <PdfDownloadButton />
              <hr className="w-[165px]" />
            </div>
            <p className="text-secondary">
              {t(selectedProduct?.product || "")}
            </p>
          </div>
          <div className="col-lg-4">
            <div className="p-sticky">
              <h2 className="fw-bold"> similar Products</h2>
              <div>
                {poructsDetails.map(
                  (item) =>
                    t(item.title).replaceAll(" ", "-").toLowerCase() ===
                      mainTitle.toLowerCase() &&
                    item.products.slice(0, 6).map((productItem) => (
                      <>
                        {productItem.product !== product && (
                          <Link
                            key={productItem.product}
                            href={"#"}
                            className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"
                          >
                            <FaArrowRight className="text-black ml-2 my-2" />
                            {t(productItem.product)}
                          </Link>
                        )}
                      </>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductPdfPage;
