/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useTranslation } from "react-i18next";
import { useLang } from "@/core/providers/langProvider";
import i18next from "i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TOPIMAGE from "@/../public/images/about-us/TOP.jpg";
import BOTTOMLOGO from "@/../public/images/about-us/BOTTOM__LOGO.webp"
import Link from "next/link";
import { useEffect } from "react";
import { ImEarth } from "react-icons/im";
import { Splide, SplideSlide } from "react-splide-ts";
import SLIDE1 from '@/../public/images/about-us/SLIDER__1.webp'
import SLIDE2 from '@/../public/images/about-us/SLIDER__2.webp'
import "react-splide-ts/css";

// ^ COMPONENT
const AboutUsPage = () => {
  console.log(i18next.language);
  const { t } = useTranslation();
  const { lng } = useLang();
  useEffect(() => { AOS.init(); AOS.refresh() }, []);

  return (
    <section >

      {/* BANNER */}
      <div data-aos="fade-down" data-aos-duration="3000" id="about-title" className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative" >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> About us</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link href="http://davkimya.com" className="d-block primary-color fw-bold text-decoration-none" >
              Home
            </Link>
            <span>/</span>
            <span className="text-white-50"> About us</span>
          </div>
        </div>
      </div>


      {/* MAIN */}

      <div id="about" data-aos="fade-down" data-aos-duration="3000" className="my-5 top">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 position-relative">
              <Image src={TOPIMAGE} alt="About Us" className="img-fluid" width={1100} height={800} />
            </div>
            <div className="col-1"></div>
            <div className="col-lg-6">
              <div className="text-justify">
                <span className="h3 text-3xl">About us</span>
                <div className="text-muted">
                  <h2>
                    <span className="text-[24px] text-zinc-900">
                      <strong>
                        <span className="bg-white">
                          <p className="text-[#22222] my-3 tracking-tight font-bold font-sans">
                            Dav Kimya company
                          </p>
                        </span>
                      </strong>
                    </span>
                  </h2>
                  <div>

                    <span className="text-[#2ecc71]">
                      <span className="aboutGreenText text-[12px] font-semibold tracking-tight">
                        <strong>&rdquo;</strong>
                      </span>
                      <span className="text-[11pt]">
                        <span className="bg-white">
                          <span className="text-[14pt] tracking-tight leading-[3rem] font-[500] ">
                            is an innovative company focused on the production
                          </span>
                        </span>
                      </span>
                      <span className="text-[16px]">
                        <strong> &ldquo;</strong>
                      </span>
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="bg-white">
                      <span className="text-[13pt]">
                        <span className="text-zinc-800 tracking-tight " style={{ wordSpacing: "8px", fontWeight: "550" }}>
                          of advanced polymeric materials. At Dav Kimya, our
                          mission is to offer innovative and cutting-edge
                          formulations that offer superior performance and
                          environmental sustainability. We specialize in the
                          production of high-performance acrylic emulsion,
                          polyester polyols, polyurethane insulation raw
                          materials, Engineered plastic compounds, and
                          Mastic and sealants.
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="description" data-aos="fade-down" data-aos-duration="3000" className="my-5 py-5 top ">
        <div className="row mt-5 mx-0">
          <div className="col-lg-6 px-0">
            <Splide options={{ autoplay: true, arrows: false, pagination: false, padding: "0", type: "loop", drag: false, height: "inherit" }} aria-label="React Splide Example" className="description">
              <SplideSlide className="h-full ">
                {/* <Image src={SLIDE1} alt="Image 1" width={2000} height={2000} className="object-fill" /> */}
              </SplideSlide>
              <SplideSlide className="h-full">
                <Image src={SLIDE2} alt="Image 2" width={2000} height={2000} className="object-fill" />
              </SplideSlide>
            </Splide>
            {/* <!-- swiper --> */}
            {/* <div className="swiper description h-100">
              <div className="swiper-wrapper">
                <div className="swiper-slide"></div>
                <div className="swiper-slide"></div>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 px-0">
            <div className="bg-black2 p-5 text-white">
              <Image alt="desc" src={BOTTOMLOGO} width={90} height={600} />
              <div className="text-justify">
                <p className="mx-0">
                  <strong>
                    <span className="text-[22pt]">
                      Our polymeric emulsion department pro
                    </span>
                    <br />
                    <br />
                    duces various grades of pure acrylic and styrene-acrylic
                    emulsion systems designed for mastics, sealants, adhesives,
                    PSA, paints, textiles, construction, etc.&nbsp;&nbsp;&nbsp;
                    <br />
                    <br />
                    Our polyurethane sector is focusing on producing
                    polyurethane raw materials for the building and insulation
                    industry such as polyester polyols for rigid polyurethane
                    foams, spray polyurethane, and pour-in-place pipe insulation
                    systems. We also recently produced a series of renewable and
                    bio-based polyols for the PU raw industry.&nbsp;&nbsp;Our
                    bio-based materials are designed to offer comparable, or
                    even enhanced properties compared to conventional products,
                    without compromising on efficiency or effectiveness.
                  </strong>
                </p>

                <p className="mx-0">
                  <strong>
                    In the compounding department, we are producing engineered
                    polymeric compounds for the lighting industry, electrical
                    and electronic, household appliances, and automobile
                    industries. By integrating nanotechnology into our
                    compound&#39;s formulation, we have developed a series of PP
                    compounds for LED cover applications with unique properties
                    that can bring several benefits through reduced weight,
                    design freedom, and economic advantages.
                    <br />
                    <br />
                    We also produce mastic and sealants cartridges as our
                    special finish&nbsp;products with tailor-made properties by
                    a combination of different raw materials such as specific
                    acrylic copolymers, silicon precursors, and silane-modified
                    polymers.
                  </strong>
                </p>
              </div>
            </div>
            <div className="primary-bg px-5 pt-4 pb-5 text-dark">
              <ImEarth className="w-16 h-16 my-4" />
              <div>
                <p className="mx-0 text-justify">
                  <strong>
                    We are committed to developing and delivering
                    high-performance products that are both environmentally
                    friendly and technologically advanced. Our state-of-the-art
                    laboratory is dedicated to formulating breakthrough
                    solutions that meet high standards of quality and
                    performance.
                    <br />
                    <br />
                    Welcome to DavKimya- where innovation meets sustainability.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsPage;
