"use client";

import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "@/core/i18n/client";

const FaqPage = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFAQ2, setShowFAQ2] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  function showFaqHandler() {
    setShowFAQ((prev) => !prev);
  }
  function showFaqHandler2() {
    setShowFAQ2((prev) => !prev);
  }

  return (
    <>
      {/* <!-- faqs-title --> */}

      <section
        id="faqs-title"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1">{t("faqs")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href="http://davkimya.com/en"
              className="d-block primary-color fw-bold text-decoration-none"
            >
              {t("home")}
            </Link>
            <span>/</span>
            <span className="text-white-50">{t("faqs")}</span>
          </div>
        </div>
      </section>

      {/* <!-- faqs --> */}

      <section id="faqs" className="my-5 py-5 top container" data-sr-id="2">
        <div className="row g-4">
          <div id="FAQ____TITLE" className="col-lg-2">
            <div className="container px-0 position-relative text-center text-lg-start">
              <span className="h3 text-3xl">{t("faqs")}</span>
              <h1 className="my-3 text-4xl">{t("faqFullName")}</h1>
            </div>
          </div>

          <div id="FAQ__ACCORDIONS" className="col-lg-10">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <h5 className="bg-black p-3 fw-bold mb-0 primary-color">
                    {t("questionOne")}
                  </h5>
                  <p className="short_answer short_answer_0 text-muted bg-gray p-3 mb-0">
                    {t("shortAnswerOne")}
                    <button className="primary-color" onClick={showFaqHandler}>
                      {t("more")}
                    </button>
                  </p>
                  <div
                    id="COLLAPSE__TEXT__1"
                    className={`${
                      showFAQ ? "block" : "hidden"
                    } text-muted bg-gray p-3 mb-0`}
                  >
                    <p className="text-justify mx-0">
                      <strong>
                        <span className="text-[11pt]">
                          <span className="font-mono">
                            <span className="text-[12pt]">
                              {t("hereIsHow")}
                            </span>
                          </span>
                        </span>
                      </strong>
                    </p>

                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>{t("rawMaterial")}</strong>
                          <span className="text-[12pt]">
                            {t("faqAnswerOne")}
                          </span>
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
                            parameters.
                          </span>
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

                    <a
                      href="javascript:void(0)"
                      className="primary-color"
                      data-id="0"
                    >
                      Close
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <h5 className="bg-black p-3 fw-bold mb-0 primary-color">
                    What are the primary industries or applications that benefit
                    from your emulsion resin offerings?
                  </h5>
                  <p className="short_answer short_answer_1 text-muted bg-gray p-3 mb-0">
                    Our emulsion resin products find applications across various
                    industries, including: ...
                    <button className="primary-color" onClick={showFaqHandler2}>
                      More
                    </button>
                  </p>
                  <div
                    id="COLLAPSE__TEXT__2"
                    className={`${
                      showFAQ2 ? "block" : "hidden"
                    } text-muted bg-gray p-3 mb-0`}
                  >
                    <p className="mx-0 text-justify">
                      <span className="text-[11pt]">
                        <span className="font-mono">
                          <strong>
                            <span className="text-[12pt]">
                              Coatings and Paints:
                            </span>
                          </strong>
                          <span className="text-[12pt]">
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
                            <span className="text-[12pt]">
                              Adhesives and Sealants:
                            </span>
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
                            <span className="text-[12pt]">
                              Textiles and Nonwovens:
                            </span>
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
                        <span className="font-mono">
                          <strong>
                            <span className="text-[12pt]">
                              Paper and Packaging:
                            </span>
                          </strong>
                          <span className="text-[12pt]">
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
                            <span className="text-[12pt]">
                              Construction and Building Materials:
                            </span>
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
                          <span className="text-[12pt]">
                            Our commitment to delivering consistent quality and
                            technical support ensures that our emulsion resin
                            products meet the diverse needs of customers across
                            these industries, helping them achieve superior
                            performance and environmental compliance in their
                            applications.
                          </span>
                        </span>
                      </span>
                    </p>

                    <button
                      onClick={showFaqHandler2}
                      className="primary-color"
                      data-id="1"
                    >
                      Close
                    </button>
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

export default FaqPage;
