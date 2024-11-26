"use client";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import pic1 from "../../../../public/images/servicesPage/item1.jpg";
import pic2 from "../../../../public/images/servicesPage/item2.jpg";
import { useEffect } from "react";
import { useLang } from "@/core/providers/langProvider";
import { useTranslation } from "@/core/i18n/client";

const ServicePage = () => {
  const { t } = useTranslation();
  const { lng } = useLang();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="2500"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
        data-sr-id="0"
        id="project-title"
      >
        <div
          className={
            "container text-white fw-bold text-center my-5 py-5 position-relative"
          }
        >
          <h1 className={"display-1"}>{t("rAndD")}</h1>
          <div
            className={"d-flex align-items-center justify-content-center gap-1"}
          >
            <Link
              href={`/${lng}`}
              className={"d-block primary-color fw-bold text-decoration-none"}
            >
              Home
            </Link>
            <span>/</span>
            <span className={"text-white-50"}>{t("rAndD")}</span>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-down"
        data-aos-duration="2500"
        id="articles"
        data-sr-id="2"
        className={"mt-5 py-5 top"}
      >
        <div className={"container"}>
          <div className={"text-center"}>
            <span className={"h3"}>{t("rAndD")}</span>
            <h1 className={"display-6 my-4"}>
              {t("boilOne")}
              <br /> {t("boilTwo")}!
            </h1>
          </div>
          <div className={"row g-4 mt-5"}>
            <div className={"col-lg-4"}>
              <div className={"box p-3 bg-white"}>
                <Link
                  href={`/${lng}/service/1`}
                  className={"d-block overflow-hidden"}
                >
                  <Image
                    width={662}
                    height={370}
                    src={pic1}
                    alt="We invite you to explore the possibilities of our customized products"
                    className={"w-100 transition"}
                  />
                </Link>
                <div className={"d-flex align-items-center gap-4 my-3"}>
                  <Link
                    href={`/${lng}/service/1`}
                    className={
                      "d-flex align-items-center gap-1 text-decoration-none"
                    }
                  >
                    <span className={"primary-color fw-bold"}>
                      Oct 29, 2022
                    </span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/service/1`}
                  className={"h4 text-decoration-none transition"}
                >
                  {t("serviceTitle1")}
                </Link>
                <p className={"text-muted mt-3"}>
                  {t("serviceText1").slice(0, 100)}...
                </p>
              </div>
            </div>
            <div className={"col-lg-4"}>
              <div className={"box p-3 bg-white"}>
                <Link
                  href={`/${lng}/service/2`}
                  className={"d-block overflow-hidden"}
                >
                  <Image
                    width={662}
                    height={370}
                    src={pic2}
                    alt="At Davkimya our Research and Development (R&amp;D) team"
                    className={"w-100 transition"}
                  />
                </Link>
                <div className={"d-flex align-items-center gap-4 my-3"}>
                  <Link
                    href={`/${lng}/service/2`}
                    className={
                      "d-flex align-items-center gap-1 text-decoration-none"
                    }
                  >
                    <span className={"primary-color fw-bold"}>
                      Oct 29, 2022
                    </span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/service/2`}
                  className={"h4 text-decoration-none transition"}
                >
                  {t("serviceTitle2")}
                </Link>
                <p className={"text-muted mt-3"}>
                  {t("serviceText2").slice(0, 100)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServicePage;
