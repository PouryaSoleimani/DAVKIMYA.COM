/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// ^ HOME PAGE COMPONENT =====================================================================================================================================
import { useTranslation } from "./../../../core/i18n/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import SLIDE1 from "./../../../../public/images/banner/SLIDE___1.jpg"
import SLIDE2 from "./../../../../public/images/banner/SLIDE___2.jpg"
import BOX1 from './../../../../public/images/boxes/BOX1.jpg'
import BOX2 from './../../../../public/images/boxes/BOX2.jpg'
import BOX3 from './../../../../public/images/boxes/BOX3.jpg'
import WHYCHOOSEUS from "./../../../../public/images/whychooseus/WHYCHOOSEUS.jpg"
// * SPLIDE
import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DownloadButton from "@/components/modules/DownloadButton";


// COMPONENT =================================================================================================================================================
const HomePage = () => {

  const { lng } = useParams();
  const { t } = useTranslation();
  const [showFAQ, setShowFAQ] = useState(false)
  const [showFAQ2, setShowFAQ2] = useState(false)
  useEffect(() => { AOS.init(); }, []);
  function showFaqHandler() { setShowFAQ(prev => !prev) }
  function showFaqHandler2() { setShowFAQ2(prev => !prev) }

  return (
    <>

      {/* <!-- BANNER --> */}
      <Splide options={{ rewind: true, rewindByDrag: true, arrows: false, autoplay: true, loop: true, drag: true, }} aria-label="React Splide Example">
        <SplideSlide className="w-screen">
          <Image src={SLIDE1} alt="Image 1" width={1500} height={920} className="w-screen" />
        </SplideSlide>
        <SplideSlide>
          <Image src={SLIDE2} alt="Image 2" width={1500} height={920} className="w-screen" />
        </SplideSlide>
      </Splide>

      {/* <!-- 3 BOXES --> */}
      <section className="container-lg overflow-visible right box-kh">
        <div className="row g-4">
          <div className="col-lg-4 position-relative">
            <Image alt="box" src={BOX1} className="img-fluid h-100 w-100" width={500} height={100} />
            <div className="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              <a href={`${lng}/product/${t("productTitleOne")}`} className="btn bg-lime-400 hover:bg-lime-600 duration-300 text-white mx-auto d-table">{t("productTitleOne")}</a>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <Image alt="box" src={BOX2} className="img-fluid h-100 w-100" width={500} height={100} />
            <div className="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              <a href={`${lng}/product/${t("productTitleTwo")}`} className="btn bg-lime-400 hover:bg-lime-600 duration-300 text-white mx-auto d-table">{t("productTitleTwo")}</a>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <Image alt="box" src={BOX3} className="img-fluid h-100 w-100" width={500} height={100} />
            <div className="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              <a href={`${lng}/product/${t("productTitleThree")}`} className="btn bg-lime-400 hover:bg-lime-600 duration-300 text-white mx-auto d-table">{t("productTitleThree")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- WHY CHOOSE US --> */}
      <section data-aos="fade-up" data-aos-duration="2000" id="choose-us" className="my-5 top py-5 position-relative" data-sr-id="0" >
        <div className="container my-5">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div className="position-relative box bg-white p-4 shadow-xl shadow-zinc-800">
                    <span
                      className="d-flex align-items-center justify-content-center">01</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight"> High-Quality, Consistent Products</h2>
                    <p className="text-muted text-lg">
                      We pride ourselves on producing top-grade emulsion resins that consistently meet the stringent quality standards of our industry. Our commitment ensures that your formulations are always reliable and high-performing.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div className="position-relative box bg-white p-4">
                    <span
                      className="d-flex align-items-center justify-content-center">02</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight ">Innovative Solutions</h2>
                    <p className="text-muted text-lg">
                      Our dedicated R&D team stays at the forefront of technological advancements to develop custom solutions that meet your evolving needs. We push the boundaries to help your products stand out in the market.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <div className="position-relative box bg-white p-4">
                    <span
                      className="d-flex align-items-center justify-content-center">03</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight">Sustainable Practices</h2>
                    <p className="text-muted text-lg">
                      We are committed to environmentally responsible production. Our processes minimize waste and incorporate eco-friendly practices, making us a partner in your sustainable supply chain.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div className="position-relative box bg-white p-4">
                    <span
                      className="d-flex align-items-center justify-content-center">04</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight">Expert Support & Customer Service</h2>
                    <p className="text-muted text-lg">
                      Our experienced team is always available to offer technical assistance and guidance. From product selection to after-sales support, we ensure a seamless and satisfying experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="text-center text-md-start position-relative">
                <span className="h3 underline decoration-4 -underline-offset-4 decoration-lime-400"> Why Choose Us </span>
                <p className="text-muted"></p>
                <p>
                  <span className="text-[20px]">
                    <strong>
                      <span className="bg-white mt-4">
                        <span>
                          <span className="text-zinc-700 tracking-tighter text-[17px] font-sans">Welcome to DavKimya- where innovation meets sustainability</span>
                        </span>
                      </span>
                    </strong>
                  </span>
                </p>
                <Image alt="choose-us" src={WHYCHOOSEUS} className="w-100 mt-4 img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQS --> */}
      <section id="faqs" className="my-5 py-5 top container" data-sr-id="2">
        <div className="row g-4">

          <div id="FAQ____TITLE" className="col-lg-4">
            <div className="container px-0 position-relative text-center text-lg-start">
              <span className="h3 text-3xl">Faqs</span>
              <h1 className="my-3 text-4xl">Frequently Asked Question</h1>
            </div>
          </div>

          <div id="FAQ__ACCORDIONS" className="col-lg-8">
            <div className="row">
              <div className="col-lg-8">
                <div className="mb-3">
                  <h5 className="bg-black p-3 fw-bold mb-0 primary-color">
                    How does your company ensure the quality and consistency of
                    your products?
                  </h5>
                  <p className={`short_answer short_answer_0 text-muted bg-gray p-3 mb-0 ${showFAQ ? " hidden" : "block"}`}>
                    Our company places a strong emphasis on quality control and
                    consistency in the manufacture of our wide range of products
                    with different applications. ...

                    <button className="primary-color" onClick={showFaqHandler}>More</button>
                  </p>
                  <div id="COLLAPSE__TEXT__1" className={`${showFAQ ? "block" : "hidden"} text-muted bg-gray p-3 mb-0`}>
                    <p className="text-justify mx-0">
                      <strong>
                        <span className="text-[11pt]">
                          <span className="font-mono">
                            <span className="text-[12pt]">Here&apos;s how we ensure quality:</span></span></span></strong>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>Raw Material Selection:</strong>
                          <span className="text-[12pt]">
                            We carefully source raw materials from reputable
                            suppliers to ensure they meet our stringent quality
                            standards. This includes selecting high-quality
                            acrylate monomers, surfactants, glycols, and
                            etc</span>
                        </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>Quality Testing:</strong>
                          <span className="text-[12pt]">
                            Our state-of-the-art quality control laboratories
                            conduct rigorous testing at various stages of
                            production. This includes testing for chemical
                            purity, viscosity, solid content, and other critical
                            parameters.</span>
                        </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>Production Process Control:</strong>
                          <span className="text-[12pt]">
                            We maintain tight control over our manufacturing
                            processes, employing advanced automation and process
                            monitoring systems to minimize variations and ensure
                            batch-to-batch consistency.
                          </span>
                        </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>Technical Support:</strong>
                          <span className="text-[12pt]">
                            Our team of technical experts works closely with
                            customers to understand their specific requirements
                            and provide guidance on the selection and
                            application of our products.
                          </span>
                        </span>
                      </span>
                    </p>

                    <button onClick={showFaqHandler} className="primary-color" data-id="1">Close</button>
                  </div>
                </div>
                <div className="mb-3">
                  <h5 className="bg-black p-3 fw-bold mb-0 primary-color">
                    What are the primary industries or applications that benefit
                    from your emulsion resin offerings?
                  </h5>
                  <p
                    className={`short_answer short_answer_1 text-muted bg-gray p-3 mb-0 ${showFAQ2 ? " hidden" : "block"}`}>
                    Our emulsion resin products find applications across various
                    industries, including: ...
                    <button className="primary-color" onClick={showFaqHandler2}>More</button>
                  </p>
                  <div id="COLLAPSE__TEXT__2" className={`${showFAQ2 ? "block" : "hidden"} text-muted bg-gray p-3 mb-0`}>
                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]"><span className="font-mono"><strong><span className="text-[12pt]">Coatings and Paints:</span></strong><span className="text-[12pt]">
                        Our emulsion resins are widely used in the
                        formulation of high-quality water-based coatings and
                        paints for architectural, automotive, and industrial
                        applications. They provide excellent adhesion,
                        durability, and low environmental impact.
                      </span>
                      </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>
                            <span className="text-[12pt]">Adhesives and Sealants:</span>
                          </strong>
                          <span className="text-[12pt]">
                            We offer emulsion resins suitable for formulating
                            adhesives and sealants with exceptional bonding
                            properties, making them ideal for construction,
                            packaging, and assembly applications.
                          </span>
                        </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>
                            <span className="text-[12pt]">Textiles and Nonwovens:</span>
                          </strong>
                          <span className="text-[12pt]">
                            Our emulsion resins enhance the performance of
                            textiles and nonwoven materials, providing
                            attributes such as water repellency, flame
                            resistance, and improved fabric stability.
                          </span>
                        </span>
                      </span>
                    </p>


                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono"><strong>
                          <span className="text-[12pt]">Paper and Packaging:</span>
                        </strong><span className="text-[12pt]">
                            We provide specialized emulsion resins for paper and
                            packaging applications, including coatings,
                            laminations, and inks, which improve print quality,
                            barrier properties, and recyclability.
                          </span>
                        </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>
                            <span className="text-[12pt]">Construction and Building Materials:</span>
                          </strong>
                          <span className="text-[12pt]">
                            Our emulsion resins are used in the production of
                            construction materials like architectural coatings,
                            concrete admixtures, and waterproofing compounds,
                            ensuring long-lasting and sustainable building
                            solutions.
                          </span>
                        </span>
                      </span>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <span className="text-[12pt]">Our commitment to delivering consistent quality and
                            technical support ensures that our emulsion resin
                            products meet the diverse needs of customers across
                            these industries, helping them achieve superior
                            performance and environmental compliance in their
                            applications.
                          </span>
                        </span>
                      </span>
                    </p>

                    <button onClick={showFaqHandler2} className="primary-color" data-id="1">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DOWNLOAD CATALOGUE */}
      <div id="DonwloadCatalogue" className="flex flex-wrap items-center justify-center gap-x-10 font-bold bg-zinc-300 w-fit h-fit mx-auto my-10 px-4 py-2 rounded-xl shadow ">
        Download Our Products Catalogue
        <DownloadButton />
      </div>
    </>
  );
};
export default HomePage;
