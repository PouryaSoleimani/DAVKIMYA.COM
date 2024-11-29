"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LOGO from "@/../public/images/logo/HOME__PAGE__LOGO.webp";
import { useTranslation } from "@/core/i18n/client";
import { useLang } from "@/core/providers/langProvider";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
  const { lng } = useLang();
  const { t } = useTranslation();
  return (
    <footer className="pt-5 text-white">
      <div className="container mt-5">
        {/* FOOTER MAIN */}
        <div className="row g-4">
          {/*  */}
          {/* LOGO AND DESC */}
          <div className="col-lg-7 col-md-6">
            <Image alt="daav" src={LOGO} className="img-fluid footer_img" width={120} height={50} />
            <p className="mt-4 text-white-50"></p>
            <p>
              Dav Kimya company is an innovative company focused on the
              production of advanced polymeric materials. At Dav Kimya, our
              mission is to offer innovative and cutting-edge formulations that
              offer superior performance and environmental sustainability.
            </p>
            <p></p>
          </div>
          {/* LINKS AND NUMBERS */}
          <div className="col-lg-5 col-md-6">

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
                    <Link href="https://davkimya.com/en/about-us" className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>About us</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://davkimya.com/en/service" className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>R&amp;D Services</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://davkimya.com/en/faqs" className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>Faqs</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <span className="pb-2 h3">{t("contactUs")}</span>
                <ul className="list-unstyled p-0 m-0 mt-4">
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href="https://davkimya.com/en/service/show/2"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>+90 534 043 36 46</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href="https://davkimya.com/en/service/show/1"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>+90 534 687 90 96</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href="https://davkimya.com/en/service/show/1"  >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>+90 506 503 43 38</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href="https://davkimya.com/en/service/show/1"    >
                      <FaArrowRight className="pl-1 text-lime-400 my-1.5" />
                      <span>+90 506 503 43 38</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold" href="https://davkimya.com/en/service/show/1"  >
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
            Copyright 2024 © All Right Reserved for DAV / Website Designed by
            <Link href="/" className="text-white">
              {" "}
              Gized Team{" "}
            </Link>
          </p>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
