"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { LuMail, LuPhoneForwarded } from 'react-icons/lu'
// IMAGES
import ArabicFlag from './../../../public/Home_files/ARABIC__FLAG.png'
import TurkishFlag from '../../../public/Home_files/TURKISH__FLAG.png'
import RussianFlag from '../../../public/Home_files/RUSSIAN__FLAG.png'
import HeaderLogo from '../../../public/images/logo/HOME__PAGE__LOGO.webp'
import { useLang } from '@/core/providers/langProvider'
import { useTranslation } from '@/core/i18n/client'
import Dropdown from 'react-bootstrap/Dropdown';

// COMPONENT
const Header = () => {
    const { lng } = useLang()
    const { t } = useTranslation()
    const [showMenu, setshowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const showMenuHandler = () => { if (window.innerWidth < 1000) { setshowMenu(prev => !prev) } else { setshowMenu(true) } }
    const handleResize = () => { setWindowWidth(window.innerWidth); };
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    useEffect(() => {
        if (windowWidth > 1000) { setshowMenu(true) } else { setshowMenu(false) }
    }, [windowWidth]);


    return (
        <header>
            {/*  CONTACT INFO  */}
            <div className="border-bottom">
                <div
                    className="d-flex flex-wrap gap-4 align-items-center justify-content-md-between justify-content-center container py-3">
                    {/* <!-- CONTACT INFOS --> */}
                    <div className="d-flex flex-wrap align-items-center justify-content-center  gap-3">
                        <div className="d-flex align-items-center gap-2">
                            <LuPhoneForwarded className='text-[#C3EB40] w-6 h-6' />
                            <span className="secondary-color">+905346879096</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <LuPhoneForwarded className='text-[#C3EB40] w-6 h-6' />
                            <span className="secondary-color">+905340433646</span>
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

                    {/* <!-- SOCIALS AND LANGUAGES --> */}
                    <div className="d-flex align-items-center gap-2">
                        {/* LANGUAGES */}
                        <Link href="/tr" className="d-block primary-bg transition rounded-circle d-flex align-items-center justify-content-center">
                            <Image src={TurkishFlag} className="lang_menu " alt="tr" width={50} height={50} />
                        </Link>
                        <Link href="/ru" className="d-block primary-bg transition rounded-circle d-flex align-items-center justify-content-center">
                            <Image src={RussianFlag} className="lang_menu" alt="ru" width={30} height={30} />
                        </Link>
                        <Link href="/ar" className="d-block primary-bg transition rounded-circle d-flex align-items-center justify-content-center">
                            <Image src={ArabicFlag} className="lang_menu " alt="tr" width={50} height={50} />
                        </Link>
                        {/* SOCIAL MEIDAS  */}
                        <Link href="https://www.facebook.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaFacebook className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://twitter.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaTwitter className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://www.instagram.com/dav/" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaInstagram className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://www.youtube.com/@dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <FaYoutube className='w-8 h-8 text-white' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* <!-- MENU AND LOGO --> */}
            <div className='bg-[#474841]'>
                {/* <!-- MENU --> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary container p-0 bg-[#474841]">
                    <div className="container-fluid bg-[#474841] ">
                        {/* <!-- LOGO --> */}
                        <Link className="navbar-brand" href="/">
                            <Image src={HeaderLogo} alt="daav" className="img-fluid py-3" width={90} height={90} />
                        </Link>
                        {/* SEARCH MODAL AND HAMBURGER MENU TOGGLER */}
                        <div className="d-flex align-items-center gap-3">
                            <button onClick={showMenuHandler} className="navbar-toggler primary-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list primary-color" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                </svg>
                            </button>

                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="d-flex d-lg-none ms-4 cursor" role="search" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </button>
                        </div>
                        {/* MENU */}
                        <div className={`${showMenu === false ? "collapse" : ""} navbar-collapse translate-y-2 lg:translate-y-3`}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                                <li className="nav-item">
                                    <Link className="nav-link primary-color active" aria-current="page" href={`/${lng}/`}>{t("home")}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href={`/${lng}/about-us`}>{t("aboutUs")}</Link>
                                </li>
                                <Dropdown className='z-50'>

                                    <Dropdown.Toggle variant="none" id="dropdown-basic" className='flex items-center justify-center m-0 p-0 z-10 focus:outline-none px-1'>
                                        <Link className="nav-link primary-color" href={`/${lng}/product`}>{t("product")}</Link>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu >
                                        <Dropdown.Item href="#/action-1" className='hover:bg-zinc-300 px-4 py-2'>Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" className='hover:bg-zinc-300 px-4 py-2'>Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" className='hover:bg-zinc-300 px-4 py-2'>Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href={`/${lng}/service`}>{t("rAndD")}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href={`/${lng}/faqs`}>{t("faqs")}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href={`/${lng}/blogs`}>{t("eventAnNews")}</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href={`/${lng}/contact-us`}>{t("contactUs")}</Link>
                                </li>
                            </ul>
                            <form className="d-none d-lg-flex cursor ms-4" role="search" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- SEARCH MODAL --> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content border border-lime-400">
                        <div className="modal-header ">
                            <h1 className="modal-title fs-5 w-full text-center" id="exampleModalLabel">Search</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="search" name="modalSearchInput" id="modalSearchInput" className='border-2 border-zinc-800 rounded-3xl w-full p-2 focus:outline-lime-500' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header