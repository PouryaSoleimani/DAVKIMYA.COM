/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { LuMail, LuMenuSquare, LuPhoneForwarded } from 'react-icons/lu'

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
                            <LuPhoneForwarded className='text-[#C3EB40] w-6 h-6' />
                            <span className="secondary-color">+905346879096</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <LuPhoneForwarded className='text-[#C3EB40] w-6 h-6' />
                            <span className="secondary-color">+905065034338</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <LuMail className='text-[#C3EB40] w-6 h-6' />
                            <span className="secondary-color">info@davkimya.com</span>
                        </div>
                    </div>
                    {/* <!-- socials --> */}
                    <div className="d-flex align-items-center gap-2">
                        {/* LANGUAGES */}
                        <Link href="https://davkimya.com/tr" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <Image src="/images/flags/TURKIYE__FLAG.bmp" className="lang_menu" alt="tr" width={30} height={30} />
                        </Link>
                        <Link href="https://davkimya.com/ru" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <Image src="/images/flags/RUSSIA__FLAG.webp" className="lang_menu" alt="ru" width={30} height={30} />
                        </Link>
                        <Link href="https://davkimya.com/ar" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <Image src="/images/flags/ARABIA__FLAG.bmp" className="lang_menu" alt="ar" width={30} height={30} />
                        </Link>
                        {/* SOCIAL MEIDAS  */}
                        <Link href="https://www.facebook.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaFacebook className='w-8 h-8' />
                        </Link>
                        <Link href="https://twitter.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaTwitter className='w-8 h-8' />
                        </Link>
                        <Link href="https://www.instagram.com/dav/" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaInstagram className='w-8 h-8' />
                        </Link>
                        <Link href="https://www.youtube.com/@dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaYoutube className='w-8 h-8' />
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!-- menu && logo --> */}
            <div>
                {/* <!-- menu --> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                    <div className="container-fluid">
                        {/* <!-- logo --> */}
                        <Link className="navbar-brand" href="/">
                            <Image src="/images/HOME__PAGE__LOGO.webp" alt="daav" className="img-fluid" width={100} height={100} />
                        </Link>
                        <div className="d-flex align-items-center gap-3">
                            <button className="navbar-toggler primary-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <LuMenuSquare className="w-32 h-32 bi bi-list primary-color" />
                            </button>
                            <form className="d-flex d-lg-none ms-4 cursor" role="search" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    <Link
                                        className="nav-link primary-color active"
                                        aria-current="page"
                                        href="https://davkimya.com/en">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/about-us">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/product">Product</Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/service">R&amp;D Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/faqs">Faqs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/blogs">Event &amp; News</Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link primary-color"
                                        href="https://davkimya.com/en/contact-us">Contact us</Link>
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