"use client"
// ^ CONTACT US PAGE ===========================================================================================================================

import { useTranslation } from "@/core/i18n/client";
import Link from "next/link";






//  COMPONENT ================================================================================================================================
const ContactUsPage = () => {
  const { t } = useTranslation()
  return (
    <>
      {/* TITLE */}

      <section id="contact-title" className="d-flex align-items-center top justify-content-center py-5 px-2 position-relative">
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> {t("contactUs")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link href="/" className="d-block primary-color fw-bold text-decoration-none">{t("home")}</Link>
            <span>/</span>
            <span className="text-white-50"> {t("contactUs")}</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container my-5 left">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="container px-0 position-relative text-center text-lg-start">
              <span className="h3"> {t("contactUs")}</span>
              <h1 className="my-3">
                DAV Petrochemichal
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                className="bi bi-geo-alt primary-color" viewBox="0 0 16 16">
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <p className="fw-bold border-bottom pb-3">DAV Petrochemichal
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                className="bi bi-telephone-forward primary-color" viewBox="0 0 16 16">
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
              </svg>
              <p className="fw-bold mt-3">
                +905346879096
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                className="bi bi-telephone-forward primary-color" viewBox="0 0 16 16">
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
              </svg>
              <p className="fw-bold mt-3">
                +905065034338
              </p>
              <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" width="20px" fill="#C3EB40">
                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
              </svg>
              <p className="fw-bold mt-3"> info davkimya.com</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 ">
            <form className="p-4 position-relative" action="http://davkimya.com/en/contact-us/post" method="post">
              <input type="hidden" name="_token" value="TemgBZMxpotKu8QhcNPF49QQFQ00aW1XK4SZw77f" />
              <div className="position-relative">
                <h4 className="fw-bold">
                  Call us for all your questions today.
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <input className="form-control my-3" name="name" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control my-3" placeholder="Email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input type="tel" name="phone" className="form-control my-3" placeholder="Phone" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input className="form-control my-3" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <textarea rows={7} name="message" className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <button type="submit"
                  className="d-flex bg-black align-items-center mt-3 justify-content-center w-100 fw-bold gap-1 border-0 py-2 text-white transition text-decoration-none">
                  <span className="h6 mb-0">Send Form</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-12">
            <iframe
              className="w-100 border-none"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12035.468090317363!2d28.948459!3d41.050037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62c25433d16d6951!2zNDHCsDAzJzAwLjEiTiAyOMKwNTYnN"
              height="400" allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <h3 className="fw-bold mt-4 text-center text-lg-start">
              Follow Us On
            </h3>
            <div
              className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mt-3 socials">
              <a href="https://www.facebook.com/dav"
                className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                  className="bi bi-facebook text-white" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="https://twitter.com/dav"
                className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                  className="bi bi-twitter text-white" viewBox="0 0 16 16">
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/dav/"
                className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                  className="bi bi-instagram text-white" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
};
export default ContactUsPage;
