"use client";
import Image from "next/image";
import Link from "next/link";
import item1 from "@/../public/images/blogs/item1.jpg";
import item2 from "@/../public/images/blogs/item2.jpg";
import item3 from "@/../public/images/blogs/item3.jpg";
import item4 from "@/../public/images/blogs/item4.jpg";
import item5 from "@/../public/images/blogs/item5.jpg";
import item6 from "@/../public/images/blogs/item6.jpg";
import { useLang } from "@/core/providers/langProvider";
import { useTranslation } from "@/core/i18n/client";

const BlogsPage = () => {
  const { t } = useTranslation();
  const { lng } = useLang();
  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-duration="2500"
        id="article-title"
        data-sr-id="0"
        className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative"
      >
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1">{t("eventAnNews")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link
              href="/"
              className="d-block primary-color fw-bold text-decoration-none"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-white-50">{t("eventAnNews")}</span>
          </div>
        </div>
      </section>

      {/* <!-- articles --> */}
      <section
        data-aos="fade-right"
        data-aos-duration="2500"
        id="articles"
        className="mt-5 py-5 left"
        data-sr-id="2"
      >
        <div className="container">
          <div className="text-center">
            <span className="h3">{t("eventAnNews")}</span>
            <h1 className="display-6 my-4">{t("latestNews")}</h1>
          </div>

          <div className="row g-4 mt-5 text-center">
            <div className="col-lg-4">
              <div className="box p-3 bg-white">
                <Link
                  href={`/${lng}/blogs/1}`}
                  className="d-block overflow-hidden"
                >
                  <Image
                    width={710}
                    height={710}
                    src={item1}
                    alt="What is Lorem Ipsum?"
                    className="w-100 transition"
                  />
                </Link>
                <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                  <Link
                    href={`/${lng}/blogs/1}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <span className="primary-color fw-bold">developer</span>
                  </Link>
                  <Link
                    href={`/${lng}/blogs/1}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="primary-color fw-bold">Jul 26, 2023</span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/blogs/1}`}
                  className="h4 text-decoration-none transition"
                >
                  What is Lorem Ipsum?
                </Link>
                <p className="text-muted mt-3">
                  What is Lorem Ipsum? Lorem Ipsum&nbsp;is simply dummy text of
                  the printing and typesetting indust...
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box p-3 bg-white">
                <Link
                  href={`/${lng}/blogs/2}`}
                  className="d-block overflow-hidden"
                >
                  <Image
                    width={710}
                    height={710}
                    src={item2}
                    alt="What is Lorem Ipsum?"
                    className="w-100 transition"
                  />
                </Link>
                <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                  <Link
                    href={`/${lng}/blogs/2}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <span className="primary-color fw-bold">admin</span>
                  </Link>
                  <Link
                    href={`/${lng}/blogs/2}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="primary-color fw-bold">Apr 5, 2023</span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/blogs/2}`}
                  className="h4 text-decoration-none transition"
                >
                  What is Lorem Ipsum?
                </Link>
                <p className="text-muted mt-3">
                  What is Lorem Ipsum? Lorem Ipsum&nbsp;is simply dummy text of
                  the printing and typesetting indust...
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box p-3 bg-white">
                <Link
                  href={`/${lng}/blogs/3}`}
                  className="d-block overflow-hidden"
                >
                  <Image
                    width={710}
                    height={710}
                    src={item3}
                    alt="What is Lorem Ipsum?"
                    className="w-100 transition"
                  />
                </Link>
                <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                  <Link
                    href={`/${lng}/blogs/3}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <span className="primary-color fw-bold">admin</span>
                  </Link>
                  <Link
                    href={`/${lng}/blogs/3}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/blogs/3}`}
                  className="h4 text-decoration-none transition"
                >
                  What is Lorem Ipsum?
                </Link>
                <p className="text-muted mt-3">
                  What is Lorem Ipsum? Lorem Ipsum&nbsp;is simply dummy text of
                  the printing and typesetting indust...
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box p-3 bg-white">
                <Link
                  href={`/${lng}/blogs/4}`}
                  className="d-block overflow-hidden"
                >
                  <Image
                    width={710}
                    height={710}
                    src={item4}
                    alt="What is Lorem Ipsum?"
                    className="w-100 transition"
                  />
                </Link>
                <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                  <Link
                    href={`/${lng}/blogs/4}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <span className="primary-color fw-bold">admin</span>
                  </Link>
                  <Link
                    href={`/${lng}/blogs/4}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/blogs/4}`}
                  className="h4 text-decoration-none transition"
                >
                  What is Lorem Ipsum?
                </Link>
                <p className="text-muted mt-3">
                  What is Lorem Ipsum?Lorem Ipsum&nbsp;is simply dummy text of
                  the printing and typesetting indust...
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box p-3 bg-white">
                <Link
                  href={`/${lng}/blogs/5}`}
                  className="d-block overflow-hidden"
                >
                  <Image
                    width={710}
                    height={710}
                    src={item5}
                    alt="What is Lorem Ipsum?"
                    className="w-100 transition"
                  />
                </Link>
                <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                  <Link
                    href={`/${lng}/blogs/5}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <span className="primary-color fw-bold">admin</span>
                  </Link>
                  <Link
                    href={`/${lng}/blogs/5}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/blogs/5}`}
                  className="h4 text-decoration-none transition"
                >
                  What is Lorem Ipsum?
                </Link>
                <p className="text-muted mt-3">
                  What is Lorem Ipsum? Lorem Ipsum&nbsp;is simply dummy text of
                  the printing and typesetting indust...
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box p-3 bg-white">
                <Link
                  href={`/${lng}/blogs/6}`}
                  className="d-block overflow-hidden"
                >
                  <Image
                    width={710}
                    height={710}
                    src={item6}
                    alt="What is Lorem Ipsum?"
                    className="w-100 transition"
                  />
                </Link>
                <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                  <Link
                    href={`/${lng}/blogs/6}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                    <span className="primary-color fw-bold">admin</span>
                  </Link>
                  <Link
                    href={`/${lng}/blogs/6}`}
                    className="d-flex align-items-center gap-1 text-decoration-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar-fill text-muted"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                  </Link>
                </div>
                <Link
                  href={`/${lng}/blogs/6}`}
                  className="h4 text-decoration-none transition"
                >
                  What is Lorem Ipsum?
                </Link>
                <p className="text-muted mt-3">
                  What is Lorem Ipsum? Lorem Ipsum&nbsp;is simply dummy text of
                  the printing and typesetting indust...
                </p>
              </div>
            </div>

            <div className="col-12 text-center paginate"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogsPage;
