"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LOGO from "@/../public/images/logo/HOME__PAGE__LOGO.webp";
import { useTranslation } from "@/core/i18n/client";
import { useLang } from "@/core/providers/langProvider";
const Footer = () => {
  const { lng } = useLang();
  const { t } = useTranslation();
  return (
    <footer className="pt-5 text-white">
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-lg-7 col-md-6">
            <Image
              alt="daav"
              src={LOGO}
              className="img-fluid footer_img"
              width={120}
              height={50}
            />
            <p className="mt-4 text-white-50"></p>
            <p>
              Dav Kimya company is an innovative company focused on the
              production of advanced polymeric materials. At Dav Kimya, our
              mission is to offer innovative and cutting-edge formulations that
              offer superior performance and environmental sustainability.
            </p>
            <p></p>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="row g-4">
              <div className="col-lg-6">
                <span className="pb-2 h3">Quick Links</span>
                <ul className="list-unstyled p-0 m-0 mt-4">
                  <li className="mb-2">
                    <Link
                      href="/"
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href={`/${lng}/product`}
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>{t("product")}</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="https://davkimya.com/en/about-us"
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>About us</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="https://davkimya.com/en/service"
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>R&amp;D Services</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="https://davkimya.com/en/faqs"
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>Faqs</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <span className="pb-2 h3">{t("contactUs")}</span>
                <ul className="list-unstyled p-0 m-0 mt-4">
                  <li className="mb-2">
                    <Link
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                      href="https://davkimya.com/en/service/show/2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>+90 534 043 36 46</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                      href="https://davkimya.com/en/service/show/1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>+90 534 687 90 96</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                      href="https://davkimya.com/en/service/show/1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>+90 506 503 43 38</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                      href="https://davkimya.com/en/service/show/1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>+90 506 503 43 38</span>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      className="d-flex align-items-center gap-2 text-decoration-none text-white fw-bold"
                      href="https://davkimya.com/en/service/show/1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="flex-shrink-0 bi bi-arrow-right-short primary-color mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                      <span>info@davkimya.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top mt-5">
        <div className="d-flex flex-wrap container align-items-center justify-content-center justify-content-lg-between gap-4 py-3">
          <p className="mb-0 fw-bold text-white-50 text-center col-12">
            Copyright 2023 © All Right Reserved for DAV / Website Designed by
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
