import Link from "next/link";
import { useTranslation } from '@/core/i18n/client'
import { FaArrowRight } from "react-icons/fa";


// COMPONENT ====================================================================================================================================================================
const ProductPdfPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <section id="post-title" className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"  >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> DAVACRYL-S4016</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link href={`/en`} className="d-block text-lime-400 fw-bold text-decoration-none"  >
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
            <h1 className="fw-bold my-3 text-4xl">DAVACRYL-S4016</h1>
            <div>
              <hr />
              <button className="download_btn" data-bs-toggle="modal" data-bs-target="#examplePdfModal"   >
                <span>Download</span>
                <span>PDF</span>
              </button>
              <hr />
            </div>
            <p className="text-secondary">DAVACRYL-S4016</p>
          </div>
          <div className="col-lg-4">
            <div className="p-sticky">
              <h2 className="fw-bold"> Recent Product</h2>
              <div>
                <Link href={`/en/product/DAVINYl-T5009/show/38`} className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"    >
                  <FaArrowRight className="text-black ml-2 my-2" />
                  DAVINYl-T5009
                </Link>
              </div>
              <div>
                <Link href={`/en/product/DAVINYl-T5002/show/37`} className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"     >
                  <FaArrowRight className="text-black ml-2 my-2" />
                  DAVINYl-T5002
                </Link>
              </div>
              <div>
                <Link href={`/en/product/DAVINYL-H5018/show/36`} className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"  >
                  <FaArrowRight className="text-black ml-2 my-2" />
                  DAVINYL-H5018
                </Link>
              </div>
              <div>
                <Link href={`/en/product/DAVINYl-C5300/show/35`} className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"                >
                  <FaArrowRight className="text-black ml-2 my-2" />
                  DAVINYl-C5300
                </Link>
              </div>
              <div>
                <Link href={`/en/product/DAVINYl-C5004/show/34`} className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"   >
                  <FaArrowRight className="text-black ml-2 my-2" />
                  DAVINYl-C5004
                </Link>
              </div>
              <div>
                <Link
                  href={`/en/product/DAVINYl-C5000/show/33`}
                  className="d-flex align-items-center gap-1 cursor text-lime-400 text-decoration-none fw-bold h5 hover:text-zinc-900 duration-300"
                >
                  <FaArrowRight className="text-black ml-2 my-2" />
                  DAVINYl-C5000
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductPdfPage;
