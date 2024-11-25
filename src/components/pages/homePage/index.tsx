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
import { useEffect } from "react";
// @ts-ignore type is not declared
import AOS from 'aos'
// COMPONENT
const HomePage = () => {

  const { lng } = useParams();
  const { t } = useTranslation();

  useEffect(() => { AOS.init(); }, []);


  return (
    <>
      {/* <!-- BANNER --> */}
      <Splide options={{ rewind: true, rewindByDrag: true, arrows: false, autoplay: true, loop: true, drag: true, }} aria-label="React Splide Example">
        <SplideSlide className="w-screen">
          <Image src={SLIDE1} alt="Image 1" width={1500} height={920} />
        </SplideSlide>
        <SplideSlide>
          <Image src={SLIDE2} alt="Image 2" width={1500} height={920} />
        </SplideSlide>
      </Splide>

      {/* <!-- 3 BOXES --> */}
      <section className="container-lg overflow-visible right box-kh">
        <div className="row g-4">
          <div className="col-lg-4 position-relative">
            <Image alt="box" src={BOX1} className="img-fluid h-100 w-100" width={500} height={100} />
            <div className="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              <a href="https://davkimya.com/en/product/35" className="btn bg-lime-400 hover:bg-lime-600 duration-300 text-white mx-auto d-table">Polymeric Emulsion System</a>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <Image alt="box" src={BOX2} className="img-fluid h-100 w-100" width={500} height={100} />
            <div className="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              <a href="https://davkimya.com/en/product/40" className="btn bg-lime-400 hover:bg-lime-600 duration-300 text-white mx-auto d-table">Polyurethanes</a>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <Image alt="box" src={BOX3} className="img-fluid h-100 w-100" width={500} height={100} />
            <div className="position-absolute end-0 start-0 bottom-0 mb-5 px-3">
              <a href="https://davkimya.com/en/product/53" className="btn bg-lime-400 hover:bg-lime-600 duration-300 text-white mx-auto d-table">Engineered Polymeric Compounds</a>
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
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight">offer innovative</h2>
                    <p className="text-muted text-lg">
                      of high-performance acrylic emulsion, polyester polyols,
                      polyurethane insulation raw materials, Engineered plastic
                      compounds, and Mastic and sealants
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div className="position-relative box bg-white p-4">
                    <span
                      className="d-flex align-items-center justify-content-center">02</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight ">specialize in the production</h2>
                    <p className="text-muted text-lg">
                      of high-performance acrylic emulsion, polyester polyols,
                      polyurethane insulation raw materials, Engineered plastic
                      compounds, and Mastic and sealants
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <div className="position-relative box bg-white p-4">
                    <span
                      className="d-flex align-items-center justify-content-center">03</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight">Respectful</h2>
                    <p className="text-muted text-lg">
                      we have developed a series of PP compounds for LED cover
                      applications with unique properties that can bring several
                      benefits through reduced weight, design freedom, and
                      economic advantages
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <div className="position-relative box bg-white p-4">
                    <span
                      className="d-flex align-items-center justify-content-center">04</span>
                    <h2 className="mt-4 mb-3 text-3xl font-semibold tracking-tight">produce mastic and sealants</h2>
                    <p className="text-muted text-lg">
                      cartridges as our special finish&nbsp;products with
                      tailor-made properties by a combination of different raw
                      materials such as specific acrylic copolymers, silicon
                      precursors, and silane-modified polymers
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
          <div className="col-lg-4">
            <div className="container px-0 position-relative text-center text-lg-start">
              <span className="h3 text-3xl">Faqs</span>
              <h1 className="my-3 text-4xl">Frequently Asked Question</h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-8">
                <div className="mb-3">
                  <h5 className="bg-black p-3 fw-bold mb-0 primary-color">
                    How does your company ensure the quality and consistency of
                    your products?
                  </h5>
                  <p className="short_answer short_answer_0 text-muted bg-gray p-3 mb-0">
                    Our company places a strong emphasis on quality control and
                    consistency in the manufacture of our wide range of products
                    with different applications. ...

                    <a className="primary-color" data-id="0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">More</a>
                  </p>
                  <div id="collapseExample" className="answer collapse answer_0 d-none text-muted bg-gray p-3 mb-0">
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
                      <span className="text-[11pt]"><span className="font-mono"><strong>Quality Testing:</strong><span className="text-[12pt]">
                        Our state-of-the-art quality control laboratories
                        conduct rigorous testing at various stages of
                        production. This includes testing for chemical
                        purity, viscosity, solid content, and other critical
                        parameters.</span></span></span>
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

                    <a href="javascript:void(0)" className="primary-color" data-id="0">Close</a>
                  </div>
                </div>
                <div className="mb-3">
                  <h5 className="bg-black p-3 fw-bold mb-0 primary-color">
                    What are the primary industries or applications that benefit
                    from your emulsion resin offerings?
                  </h5>
                  <p
                    className="short_answer short_answer_1 text-muted bg-gray p-3 mb-0">
                    Our emulsion resin products find applications across various
                    industries, including: ...
                    <a href="javascript:void(0)" className="primary-color" data-id="1">More</a>
                  </p>
                  <div
                    className="answer answer_1 d-none text-muted bg-gray p-3 mb-0">
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

                    <a href="javascript:void(0)" className="primary-color" data-id="1">Close</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default HomePage;
