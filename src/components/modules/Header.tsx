import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            {/*  contact  */}
            <div className="border-bottom">
                <div
                    className="d-flex flex-wrap gap-4 align-items-center justify-content-md-between justify-content-center container py-3">
                    {/* <!-- address --> */}
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center gap-md-5 gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-telephone-forward primary-color" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"></path>
                            </svg>
                            <span className="secondary-color">+905346879096</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-telephone-forward primary-color" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"></path>
                            </svg>
                            <span className="secondary-color">+905065034338</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" width="20px" fill="#C3EB40">
                                <path
                                    d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"></path>
                            </svg>
                            <span className="secondary-color">info@davkimya.com</span>
                        </div>
                    </div>
                    {/* <!-- socials --> */}
                    <div className="d-flex align-items-center gap-2">
                        {/* LANGUAGES */}
                        <a href="https://davkimya.com/tr" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <Image src="Home_files/photo-516e634f97d149d0c0c9c63a015feabf.png" className="lang_menu" alt="tr" width={30} />
                        </a>
                        <a href="https://davkimya.com/ru" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <Image src="Home_files/photo-8145613ec7e208ce472f6b03919d735d.png" className="lang_menu" alt="ru" width={30} />
                        </a>
                        <a href="https://davkimya.com/ar" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <Image src="Home_files/photo-20c6d9c335931b0b7f0245da907846d7.png" className="lang_menu" alt="ar" width={30} />
                        </a>
                        {/* SOCIAL MEIDAS  */}
                        <a href="https://www.facebook.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/dav/" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- menu && logo --> */}
            <div>
                {/* <!-- menu --> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                    <div className="container-fluid">
                        {/* <!-- logo --> */}
                        <a className="navbar-brand" href="https://davkimya.com/en">
                            <Image src="Home_files/logo-a9f658ded85a4459a0b427967ef706fc.png" alt="daav" className="img-fluid" width="100" />
                        </a>
                        <div className="d-flex align-items-center gap-3">
                            <button className="navbar-toggler primary-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list primary-color" viewBox="0 0 16 16">
                                    <path
                                        fill-rule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                </svg>
                            </button>
                            <form
                                className="d-flex d-lg-none ms-4 cursor"
                                role="search"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-search text-white"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </form>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color active"
                                        aria-current="page"
                                        href="https://davkimya.com/en">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/about-us">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/product">Product</a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/service">R&amp;D Services</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/faqs">Faqs</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/blogs">Event &amp; News</a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/contact-us">Contact us</a>
                                </li>
                            </ul>
                            <form
                                className="d-none d-lg-flex cursor ms-4"
                                role="search"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    className="bi bi-search text-white"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </form>
                        </div>
                    </div>
                </nav>
                {/* <!-- </nav> --> */}
            </div>
        </header >
    )
}

export default Header