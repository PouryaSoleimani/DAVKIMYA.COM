/* eslint-disable @typescript-eslint/no-unused-vars */
// ^ ABOUT US PAGE =========================================================================================================================================
"use client";
import { useTranslation } from "@/core/i18n/client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import BottomIMAGE from "@/../public/images/about-us/TOP.jpeg";
import BOTTOMLOGO from "@/../public/images/about-us/BOTTOM__LOGO.png";
import Link from "next/link";
import { useEffect } from "react";
import sliderOne from "@/../public/images/about-us//SLIDER__1.jpg";

// ^ COMPONENT =========================================================================================================================================
const AboutUsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //  RETURN ==============================================================================================================================================
  return (
    <section>
      {/* TOPBANNER PART */}
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        id="about-title"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> {t("aboutUs")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href={`/`}
              className="d-block primary-color fw-bold text-decoration-none"
            >
              {" "}
              Home
            </Link>
            <span>/</span>
            <span className="text-white-50"> {t("aboutUs")}</span>
          </div>
        </div>
      </div>


      {/* Middle */}
      <div
        id="description"
        data-aos="fade-down"
        data-aos-duration="3000"
        className="my-5 py-5 top "
      >
        <div className="row mt-5 mx-0">
          {/* SLIDER */}
          <div className="col-lg-6 px-0 ">
            <Image
              alt="company pic"
              src={sliderOne}
              className="img-fluid h-100"
            />
          </div>
          {/* DESCRIPTIONS */}
          <div className="col-lg-6 px-0 h-100">
            <div className="bg-[#00000080] p-5 text-white">
              <Image alt="desc" src={BOTTOMLOGO} width={90} height={600}  />
              <div className="text-justify">
                <h2 className="mx-0 text-[24pt] font-bold">
                  An innovative company focused on the production of advanced
                  polymeric materials.
                </h2>
   
                <p className="text-sm font-semibold ">
                  {" "}
                  At Dav Kimya, our mission is to offer innovative and
                  cutting-edge formulations that offer superior performance and
                  environmental sustainability. We specialize in the production
                  of high-performance acrylic emulsion, polyester polyols,
                  polyurethane insulation raw materials, Engineered plastic
                  compounds, and Mastic and sealants.
                  {t("aboutUsBottomDescription")}

                  {t("aboutUsBottomSubDesc1")}
                  {t("aboutUsBottomSubDesc2")}
                  {t("aboutUsBottomSubDesc3")}
                  {t("aboutUsBottomSubDesc4")}
                  {t("aboutUsBottomSubDesFooter")}
                </p>
                {/* <strong className="text-xl text-[#2ecc71]">
                  {t("aboutUsBottomSubDesMoto")}
                </strong> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End PART */}
      <div
        id="about"
        className="my-5 top"
      >
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 position-relative">
              <Image
                src={BottomIMAGE}
                alt="About Us"
                className="img-fluid"
                width={1100}
                height={800}
              />
            </div>
            <div className="col-lg-5 position-relative">
              {/* <Image
                src={BottomIMAGE}
                alt="About Us"
                className="img-fluid"
                width={1100}
                height={800}
              /> */}
            </div>

          </div>
        </div>
      </div>


    </section>
  );
};
export default AboutUsPage;
