/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
// ^ OUR PRODUCTS PAGE =========================================================================================================================
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useLang } from "@/core/providers/langProvider";
import { useTranslation } from "@/core/i18n/client";
import Image from "next/image";
import SAMPLEIMAGE from '@/../public/images/boxes/BOX1.jpg'
// COMPONENT =================================================================================================================================
const ProductPage = () => {
  const { t } = useTranslation();
  const { lng } = useLang();
  useEffect(() => { AOS.init(); AOS.refresh() }, []);

  // RETURN =================================================================================================================================
  return (
    <>
      {/* TITLE */}
      <section data-aos="fade-down" data-aos-duration="2500" id="article-title" className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative" data-sr-id="0" >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1">{t("ourProductsTitle")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link href="/en/" className="d-block primary-color fw-bold text-decoration-none">{t("home")}</Link>
            <span>/</span>
            <Link href="/en/product" className="text-white-50">
              {t("product")}
            </Link>
          </div>
        </div>
      </section >

      {/* BOXES */}
      <section data-aos="fade-right" data-aos-duration="2500" id="articles" className="mt-5 py-5 left" data-sr-id="2" >
        <div className="container">
          <div className="text-center">
            <span className="h3">
              {t("ourProductsTitle")}
            </span>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/35" className="title_h1 tracking-tighter">
                    Polymeric Emulsion System
                  </Link>
                  <hr />
                  <Image src={SAMPLEIMAGE} width={600} height={600} alt="image" className="mt-3" />
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/40" className="title_h1 tracking-tighter">
                    Polyurethanes
                  </Link>
                  <hr />
                  <Image src={SAMPLEIMAGE} width={600} height={600} alt="image" className="mt-3" />
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/53" className="title_h1 whitespace-nowrap tracking-tighter">
                    Engineered Polymeric Compounds
                  </Link>
                  <hr />
                  <Image src={SAMPLEIMAGE} width={600} height={600} alt="image" className="mt-3" />
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/66" className="title_h1 tracking-tighter">
                    Mastic and sealants
                  </Link>
                  <hr />
                  <Image src={SAMPLEIMAGE} width={600} height={600} alt="image" className="mt-3" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
            </div>

          </div>

        </div>
      </section >
    </>

  )
};
export default ProductPage;
