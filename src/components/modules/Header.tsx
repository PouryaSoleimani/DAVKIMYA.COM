"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaYoutube } from "react-icons/fa";
import { LuMail, LuPhoneForwarded } from "react-icons/lu";
import ArabicFlag from './../../../public/Home_files/ARABIC__FLAG.png'
import TurkishFlag from '../../../public/Home_files/TURKISH__FLAG.png'
import RussianFlag from '../../../public/Home_files/RUSSIAN__FLAG.png'
import HeaderLogo from '../../../public/images/logo/HOME__PAGE__LOGO.webp'
import { useLang } from '@/core/providers/langProvider'
import { useTranslation } from '@/core/i18n/client'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import SearchModal from "./SearchModal";
import { BsChevronBarDown } from "react-icons/bs";

// COMPONENT =====================================================================================================================================================
const Header = () => {
    const { lng } = useLang()
    const { t } = useTranslation()
    const [showMenu, setshowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    //  FUNCTIONS
    const showMenuHandler = () => { if (window.innerWidth < 1000) { setshowMenu(prev => !prev) } else { setshowMenu(true) } }
    const handleResize = () => { setWindowWidth(window.innerWidth); };

    useEffect(() => {
        setWindowWidth(window.innerWidth); window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); };
    }, []);


    useEffect(() => { if (windowWidth > 1000) { setshowMenu(true); } else { setshowMenu(false); } }, [windowWidth]);

    return (
        <header className='relative top-0 left-0 z-10'>
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
                        <Link href="https://www.facebook.com/profile.php?id=61560371619609" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center" target="_blank">
                            <FaFacebook className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://linkedin.com/company/100947619/admin/dashboard" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center" target="_blank">
                            <FaLinkedin className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://www.instagram.com/dav.kimya" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center" target="_blank">
                            <FaInstagram className='w-8 h-8 text-white' />
                        </Link>
                        <Link href="https://www.youtube.com/@dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center" target="_blank">
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
                            <Button id="HOMEPAGE__SEARCH__BUTTON__MOBILE" variant="ghost" onClick={() => setModalShow(true)} className="flex min-[1000px]:hidden items-center justify-center">
                                <FaSearch className="text-white w-10 h-10 cursor-pointer translate-y-0" />
                            </Button>
                            <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
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
                                <Dropdown className='z-50 m-[-2px] min-[1000px]:m-0'>
                                    <Dropdown.Toggle variant="none" id="dropdown-basic" className='inline-flex  items-center justify-center m-0 p-0 z-10 focus:outline-none px-1'>
                                        <Link className="nav-link primary-color" href={`/${lng}/product`}>{t("product")}</Link>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item href={`/${lng}/product`} className='hover:bg-zinc-300 px-4 py-2'> All {t("product")} </Dropdown.Item>
                                        <Dropdown.Item href={`/${lng}/product`} className='hover:bg-zinc-300 px-4 py-2'>{t("productTitleOne")}</Dropdown.Item>
                                        <Dropdown.Item href={`/${lng}/product`} className='hover:bg-zinc-300 px-4 py-2'>{t("productTitleTwo")}</Dropdown.Item>
                                        <Dropdown.Item href={`/${lng}/product`} className='hover:bg-zinc-300 px-4 py-2'>{t("productTitleThree")}</Dropdown.Item>
                                        <Dropdown.Item href={`/${lng}/product`} className='hover:bg-zinc-300 px-4 py-2'>{t("productTitleFour")}</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* NEW DROPDOWN */}
                                <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button
                                    <BsChevronBarDown />
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="multi-dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown
                                                <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                                </svg>
                                            </button>
                                            <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

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
                            {/* <!-- SEARCH MODAL --> */}
                            <Button id="HOMEPAGE__SEARCH__BUTTON__DESKTOP" variant="ghost" onClick={() => setModalShow(true)} className="hidden min-[1000px]:flex items-center justify-center">
                                <FaSearch className="text-white w-7 h-7 cursor-pointer translate-y-0" />
                            </Button>
                            <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                </nav>
            </div>

        </header >
    )
}

export default Header;
