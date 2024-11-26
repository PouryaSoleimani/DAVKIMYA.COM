import Image from "next/image";
import Link from "next/link";

const BlogsPage = () => {
  return (<>
      <section id="article-title"
             className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative">
      <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
        <h1 className="display-1">Event &amp; News</h1>
        <div className="d-flex align-items-center justify-content-center gap-1">
          <Link href="/" 
             className="d-block primary-color fw-bold text-decoration-none">Home</Link>
          <span>/</span>
          <span className="text-white-50">Event &amp; News</span>
        </div>
      </div>
    </section>

    {/* <!-- articles --> */}
          <section id="articles" className="mt-5 py-5 left">
        <div className="container">
          <div className="text-center">
                    <span className="h3">
                        Event &amp; News
                    </span>
            <h1 className="display-6 my-4">
              The Latest News
            </h1>

          </div>

          <div className="row g-4 mt-5 text-center">
                          <div className="col-lg-4">
                        <div className="box p-3 bg-white">
                            <Link href="/" className="d-block overflow-hidden">
                                <Image width={10} height={10} src="" alt="What is Lorem Ipsum?"
                                    className="w-100 transition"/>
                            </Link>
                            <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span className="primary-color fw-bold">developer</span>
                                </Link>
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span className="primary-color fw-bold">Jul 26, 2023</span>
                                </Link>
                            </div>
                            <Link href="/"  className="h4 text-decoration-none transition">
                                What is Lorem Ipsum?
                            </Link>
                            <p className="text-muted mt-3">
                                What is Lorem Ipsum?

Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting indust...
                            </p>
                        </div>
                    </div>
                    
                                  <div className="col-lg-4">
                        <div className="box p-3 bg-white">
                            <Link href="/" className="d-block overflow-hidden">
                                <Image width={10} height={10} src="" alt="What is Lorem Ipsum?"
                                    className="w-100 transition"/>
                            </Link>
                            <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span className="primary-color fw-bold">admin</span>
                                </Link>
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span className="primary-color fw-bold">Apr 5, 2023</span>
                                </Link>
                            </div>
                            <Link href="/"  className="h4 text-decoration-none transition">
                                What is Lorem Ipsum?
                            </Link>
                            <p className="text-muted mt-3">
                                What is Lorem Ipsum?

Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting indust...
                            </p>
                        </div>
                    </div>
                    
                                  <div className="col-lg-4">
                        <div className="box p-3 bg-white">
                            <Link href="/" className="d-block overflow-hidden">
                                <Image width={10} height={10} src="" alt="What is Lorem Ipsum?"
                                    className="w-100 transition"/>
                            </Link>
                            <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span className="primary-color fw-bold">admin</span>
                                </Link>
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                                </Link>
                            </div>
                            <Link href="/" className="h4 text-decoration-none transition">
                                What is Lorem Ipsum?
                            </Link>
                            <p className="text-muted mt-3">
                                What is Lorem Ipsum?

Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting indust...
                            </p>
                        </div>
                    </div>
                    
                                  <div className="col-lg-4">
                        <div className="box p-3 bg-white">
                            <Link href="/" className="d-block overflow-hidden">
                                <Image width={10} height={10} src="" alt="What is Lorem Ipsum?"
                                    className="w-100 transition"/>
                            </Link>
                            <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span className="primary-color fw-bold">admin</span>
                                </Link>
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                                </Link>
                            </div>
                            <Link href="/"  className="h4 text-decoration-none transition">
                                What is Lorem Ipsum?
                            </Link>
                            <p className="text-muted mt-3">
                                What is Lorem Ipsum?Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting indust...
                            </p>
                        </div>
                    </div>
                    
                                  <div className="col-lg-4">
                        <div className="box p-3 bg-white">
                            <Link href="/" className="d-block overflow-hidden">
                                <Image width={10} height={10} src="" alt="What is Lorem Ipsum?"
                                    className="w-100 transition"/>
                            </Link>
                            <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span className="primary-color fw-bold">admin</span>
                                </Link>
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                                </Link>
                            </div>
                            <Link href="/"className="h4 text-decoration-none transition">
                                What is Lorem Ipsum?
                            </Link>
                            <p className="text-muted mt-3">
                                What is Lorem Ipsum?

Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting indust...
                            </p>
                        </div>
                    </div>
                    
                                  <div className="col-lg-4">
                        <div className="box p-3 bg-white">
                            <Link href="/" className="d-block overflow-hidden">
                                <Image width={10} height={10} src="" alt="What is Lorem Ipsum?"
                                    className="w-100 transition"/>
                            </Link>
                            <div className="d-flex align-items-center justify-content-center gap-4 my-3">
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-person-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <span className="primary-color fw-bold">admin</span>
                                </Link>
                                <Link href="/" className="d-flex align-items-center gap-1 text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-calendar-fill text-muted" viewBox="0 0 16 16">
                                        <path
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <span className="primary-color fw-bold">Oct 29, 2022</span>
                                </Link>
                            </div>
                            <Link href="/"  className="h4 text-decoration-none transition">
                                What is Lorem Ipsum?
                            </Link>
                            <p className="text-muted mt-3">
                                What is Lorem Ipsum?

Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting indust...
                            </p>
                        </div>
                    </div>
                    
                                <div className="col-12 text-center paginate">
              
            </div>
          </div>

        </div>
      </section>

  </>
);}
export default BlogsPage;
