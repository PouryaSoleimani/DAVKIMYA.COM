"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LOGO from "@/../public/images/logo/HOME__PAGE__LOGO.webp";
import { useTranslation } from "@/core/i18n/client";
import { useLang } from "@/core/providers/langProvider";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const { lng } = useLang();
  const { t } = useTranslation();
  return (
    <footer className="text-white pt-2">
      <div className=" flex items-center justify-evenly  pl-10 gap-x-10  mt-5">
        {/*//& FOOTER MAIN */}
        <div className="row g-4">

          {/*//^ MAP */}
          <div className="col-lg-4">
            <div style={{ width: "100%" }}>
              {/* <Link href="https://www.gps.ie/">gps systems</Link> */}
              <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=41%C2%B016'04.7%22N%2027%C2%B056'26.5%22E+(Dav%20Kimya)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>

          {/*//!  LOGO AND DESC */}
          <div className="col-lg-4 col-md-6 -translate-y-1 space-y-[4.5rem]">
            <Image alt="daav" src={LOGO} className="img-fluid footer_img" width={130} height={50} />
            <p className="mt-4 text-white-50"></p>
            <p className="text-xl">
              Dav Kimya company is an innovative company focused on the
              production of advanced polymeric materials. At Dav Kimya, our
              mission is to offer innovative and cutting-edge formulations that
              offer superior performance and environmental sustainability.
            </p>
            <p></p>
            <p className="mt-10 text-2xl underline decoration-lime-400 decoration-2 underline-offset-8 flex items-center gap-x-1 leading-10 tracking-tight">
              <FaLocationDot className="translate-y-1 text-red-700" />
              7W9R+57P, Kapaklı, Tekirdağ, Turkey
            </p>
          </div>

          {/*//? LINKS AND NUMBERS */}
          <div className="col-lg-4 col-md-6 translate-y-10">

            <div className="row g-4">

              <div className="col-lg-6">
                <span className="pb-2 h3">Quick Links</span>
                <ul className="list-unstyled p-0 m-0 mt-4">
                  <li className="mb-2">
                    <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"   >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={`/${lng}/product`} className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>{t("product")}</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={`/${lng}/about-us`} className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>{t("aboutUs")}</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={`/${lng}/service`} className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>{t("rAndD")}</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={`/${lng}/faqs`} className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>{t("faqs")}</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <span className="pb-2 h3">{t("contactUs")}</span>
                <ul className="list-unstyled p-0 m-0 mt-4">
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href={`/${lng}/contact-us`}  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>+905346879096</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href={`/${lng}/contact-us`}  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>info@davkimya.com</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-top mt-5">
        <div className="d-flex flex-wrap container align-items-center justify-content-center justify-content-lg-between gap-4 py-3">
          <p className="mb-0 fw-bold text-white-50 text-center col-12">
            Copyright 2024 © All Right Reserved for DAV / Website Designed by{" "}
            <Link href="/" className="text-white italic ">
              Gized Group
            </Link>
          </p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
