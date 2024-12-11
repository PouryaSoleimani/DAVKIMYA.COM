/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import item1 from "@/../public/images/servicesPage/item1.jpg";
import item2 from "@/../public/images/servicesPage/item2.jpg";
import { useTranslation } from "@/core/i18n/client";
import { useLang } from "@/core/providers/langProvider";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

type serviceData = {
  id: number;
  image: StaticImageData;
  title: string;
  text: string;
};

const BlogDetailsPage = () => {
  // const { id } = useParams();
  const id = "1";
  const { lng } = useLang();
  const { t } = useTranslation();
  const blogId = id ? id[0] : undefined;

  // const serviceData: serviceData[] = [
  //   { id: 1, image: item1, title: t("rAndD"), text: t("serviceText1") },
  //   { id: 2, image: item2, title: t("serviceTitle2"), text: t("serviceText2") },
  // ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main>
      {/* <!-- post-title --> */}
      <section
        data-aos="fade-down"
        data-aos-duration="2500"
        data-sr-id="0"
        id="post-title"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1">
            {t("serviceTitle1")}
            {/* {blogId === "1"
              ? serviceData[0].title
              : blogId === "2"
                ? serviceData[1].title
                : ""} */}
          </h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href="/"
              className="d-block primary-color fw-bold text-decoration-none"
            >
              {t("home")}
            </Link>
            <span>/</span>
            <span className="text-white-50">{t("rAndD")}</span>
          </div>
        </div>
      </section>

      {/* <!-- single service --> */}
      <section
        data-aos="fade-right"
        data-aos-duration="2500"
        data-sr-id="2"
        id="single-service"
        className="container my-5 left"
      >
        <div className="row g-4">
          <div className="col-lg-9">
            <Image
              width={blogId === "1" ? 505 : 856}
              height={blogId === "1" ? 336 : 459}
              src={item1}
              alt={"a boat"}
              className="img-fluid w-[100%]"
            />
            <h2 className="fw-bold my-3   ">{t("rAndD")}</h2>
            <p>
              The technical team at Dav Kimya represents years of hands-on
              experience and in-depth knowledge of emulsion resin and
              polyurethane chemistry. Our experts have worked extensively in
              developing advanced solutions for diverse applications, from
              paints and coatings to adhesives and sealants. Their ability to
              understand complex requirements and offer tailored solutions sets
              Dav Kimya apart as a trusted partner in the chemical industry.
            </p>
            <h3 className="mb-2 text-3 text-2xl">
              Guidance Every Step of the Way
            </h3>
            <p>
              In today’s competitive markets, success often hinges on the
              quality and innovation of the materials used. At Dav Kimya, we are
              committed to helping our customers succeed by providing:
            </p>
            <p>
              <span className="fw-bold text-lg">
                • Specialized in Product Recommendations:
              </span>{" "}
              Based on your specific application needs, our experts will guide
              you in selecting the most suitable emulsion resin or polyurethane
              raw materials.
            </p>
            <p>
              <span className="fw-bold text-lg">
                • Support in Product Development:
              </span>{" "}
              Whether you’re creating a new product or refining an existing
              formulation, our team works closely with you to ensure optimal
              performance and cost-efficiency.
            </p>
            <p>
              <span className="fw-bold text-lg">
                • Quality Assurance Assistance:
              </span>{" "}
              We help our customers implement stringent quality controls to
              produce products that exceed market standards.
            </p>
            <p>
              <span className="fw-bold text-lg">
                • Technical Troubleshooting:
              </span>{" "}
              Facing challenges in production or application? Our team is just a
              call away to provide solutions rooted in science and practicality.
            </p>
            <h3 className="fw-bold my-3   ">
              Driving Innovation and Quality Together
            </h3>
            <p>
              Dav Kimya’s mission extends beyond simply supplying raw materials.
              We see ourselves as a partner in your journey toward producing
              superior products for your customers. By collaborating with our
              technical team, you gain access to the latest advancements in
              emulsion resin and polyurethane technology, helping you stay ahead
              in a rapidly evolving market.
            </p>
            <h3 className="mb-2 text-3 text-2xl">
              Why Partner with Dav Kimya?
            </h3>
            <p>
              <span className="fw-bold text-lg">• Proven Expertise:</span> Our
              team’s technical proficiency is backed by years of experience and
              continuous learning.
            </p>
            <p>
              <span className="fw-bold text-lg">• Innovative Solutions:</span>{" "}
              We stay at the forefront of chemical advancements to offer
              state-of-the-art products and processes.
            </p>
            <p>
              <span className="fw-bold text-lg">
                • Commitment to Excellence:
              </span>{" "}
              At Dav Kimya, customer success is our priority, and we are
              dedicated to providing the support needed to achieve it..
            </p>
            <p>
              By combining world-class products with unparalleled technical
              support, Dav Kimya ensures that our customers can create products
              that inspire trust and satisfaction in their own markets.
            </p>
            <p>📩 To learn more about how Dav Kimya can support your business, contact our team today. Let’s innovate and achieve excellence together.
            </p>
            <p>
              This formal article emphasizes expertise, innovation, and customer
              collaboration, aligning with Dav Kimya’s positioning as a leader
              in emulsion resin and polyurethane raw materials.
            </p>
          </div>
          {/* dynamic disabled */}
          {/* <div className="col-lg-8">
            <div>
              <Image
                width={blogId === "1" ? 505 : 856}
                height={blogId === "1" ? 336 : 459}
                src={
                  blogId === "1"
                    ? serviceData[0].image
                    : blogId === "2"
                      ? serviceData[1].image
                      : ""
                }
                alt={"a boat"}
                className="img-fluid w-[100%]"
              />
            </div>
            <h1 className="fw-bold my-3 h2">
              {blogId === "1"
                ? serviceData[0].title
                : blogId === "2"
                  ? serviceData[1].title
                  : ""}
            </h1>
            <p className="text-secondary">
              {blogId === "1"
                ? serviceData[0].text
                : blogId === "2"
                  ? serviceData[1].text
                  : ""}
            </p>
          </div> */}
          <div className="col-lg-3">
            <form className="position-relative">
              <input type="search" className="form-control w-100" />
              <div className="position-absolute text-white primary-bg p-2 end-0 top-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="currentColor"
                  className="bi bi-search cursor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </form>
            <div className="mt-5">
              <h2 className="fw-bold h2">{t("recentService")}</h2>
              <div>
                <Link
                  href={`${lng}/service/show/2`}
                  className="d-flex align-items-center gap-1 cursor primary-color text-decoration-none fw-bold h5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="flex-shrink-0 bi bi-arrow-right-short text-dark mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                  {/* {blogId === "1"
                    ? serviceData[0].title
                    : blogId === "2"
                      ? serviceData[1].title
                      : ""} */}
                  {t("serviceTitle1")}
                </Link>
              </div>
            </div>
            <div className="mt-5 h-[calc(100%-260px)] flex flex-col  justify-end">
              {/* Artiles that has  been removed */}
              {/* <h2 className="fw-bold h2">{t("RecentArticles")}</h2> */}

              {/* {Array.from({ length: 5 }, (index: number) => {
                return (
                  <div className="mt-4" key={Math.random()}>
                    <div className="mb-4">
                      <Link
                        href="/"
                        className="d-block h4 cursor text-decoration-none transition fw-bold"
                      >
                        {t("lorem")}
                      </Link>
                      <span className="primary-color fw-bold h5">
                        Jul 26, 2023
                      </span>
                    </div>
                  </div>
                );
              })} */}

              {/* Repeat similar blocks for other articles */}
              <h3 className="fw-bold mt-4 text-center text-lg-start">
                {t("followUs")}
              </h3>
              <div className="d-flex align-items-center gap-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61560371619609"
                  className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaFacebook className="w-8 h-8 text-white" />
                </Link>
                <Link
                  href="https://linkedin.com/company/100947619/admin/dashboard"
                  className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaLinkedin className="w-8 h-8 text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/dav.kimya"
                  className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaInstagram className="w-8 h-8 text-white" />
                </Link>
                <Link
                  href="https://www.youtube.com/@dav"
                  className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaYoutube className="w-8 h-8 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsPage;
