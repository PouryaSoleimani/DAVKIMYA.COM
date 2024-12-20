/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

// COMPONENT =====================================================================================================================================================
const Header = () => {
    const { lng } = useLang()
    const { t } = useTranslation()
    const [showMenu, setshowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);

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
                            <button onClick={showMenuHandler} className="navbar-toggler primary-border " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 ">
                                <li className="nav-item">
                                    <Link className="nav-link primary-color active" aria-current="page" href={`/${lng}/`}>{t("home")}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href={`/${lng}/about-us`}>{t("aboutUs")}</Link>
                                </li>

                                {/* NEW DROPDOWN */}
                                <Nav className="mx-0 -translate-x-5 lg:translate-x-0">
                                    <NavDropdownMenu title="Products" id="collasible-nav-dropdown">

                                        <NavDropdown.Item  href={`/${lng}/product`} className="mr-2 pr-2 flex leading-1 ">
                                        All products
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <DropdownSubmenu href="#" title="Polymeric Emulsion System" className="mr-2 pr-2 flex leading-1 ">
                                        <NavDropdown.Item href={`/${lng}/product/${t("productTitleOne").replaceAll(" ","-")}/${t("titleOneSubTitleTwo").replaceAll(" ","-")}`}> {t("titleOneSubTitleTwo")}</NavDropdown.Item>
                                        <NavDropdown.Item href={`/${lng}/product/${t("productTitleOne").replaceAll(" ","-")}/${t("titleOneSubTitleOne").replaceAll(" ","-")}`}> {t("titleOneSubTitleOne")} </NavDropdown.Item> 
                                        <NavDropdown.Item href={`/${lng}/product/${t("productTitleOne").replaceAll(" ","-")}/${t("titleOneSubTitleThree").replaceAll(" ","-")}`}> {t("titleOneSubTitleThree")} </NavDropdown.Item>
                                        <NavDropdown.Item href={`/${lng}/product/${t("productTitleOne").replaceAll(" ","-")}/${t("titleOneSubTitleFour").replaceAll(" ","-")}`}>{t("titleOneSubTitleFour")} </NavDropdown.Item>
                                        </DropdownSubmenu>
                                        <DropdownSubmenu href="#" title="Polyurethanes" className="mr-2 pr-2 flex leading-1 ">
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleTwo").replaceAll(" ","-")}/${t("titleTwoSubTitleOne").replaceAll(" ","-")}`}>  {t("titleTwoSubTitleOne")}</NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleTwo").replaceAll(" ","-")}/${t("titleTwoSubTitleTwo").replaceAll(" ","-")}`}>  {t("titleTwoSubTitleTwo")}</NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleTwo").replaceAll(" ","-")}/${t("titleTwoSubTitleThree").replaceAll(" ","-")}`}>  {t("titleTwoSubTitleThree")}</NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleTwo").replaceAll(" ","-")}/${t("titleTwoSubTitleFour").replaceAll(" ","-")}`}>  {t("titleTwoSubTitleFour")}</NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleTwo").replaceAll(" ","-")}/${t("titleTwoSubTitleFive").replaceAll(" ","-")}`}>  {t("titleTwoSubTitleFive")}</NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleTwo").replaceAll(" ","-")}/${t("titleTwoSubTitleSix").replaceAll(" ","-")}`}>  {t("titleTwoSubTitleSix")}</NavDropdown.Item>
                                        </DropdownSubmenu>
                                        <DropdownSubmenu href="#" title="Engineered Polymeric Compounds" className="mr-2 pr-2 flex leading-1 ">
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleThree").replaceAll(" ","-")}/${t("titleThreeSubTitleOne").replaceAll(" ","-")}`}>   {t("titleThreeSubTitleOne")} </NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleThree").replaceAll(" ","-")}/${t("titleThreeSubTitleTwo").replaceAll(" ","-")}`}>   {t("titleThreeSubTitleTwo")} </NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleThree").replaceAll(" ","-")}/${t("titleThreeSubTitleThree").replaceAll(" ","-")}`}>   {t("titleThreeSubTitleThree")} </NavDropdown.Item>
                                        </DropdownSubmenu>
                                        <DropdownSubmenu href="#" title="Mastic and Sealants" className="mr-2 pr-2 flex leading-1 ">
                                        <NavDropdown.Item href={`/${lng}/product/${t("productTitleFour").replaceAll(" ","-")}/${t("titleFourSubTitleOne").replaceAll(" ","-")}`}>   {t("titleFourSubTitleOne")} </NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleFour").replaceAll(" ","-")}/${t("titleFourSubTitleTwo").replaceAll(" ","-")}`}>   {t("titleFourSubTitleTwo")} </NavDropdown.Item>
                                            <NavDropdown.Item href={`/${lng}/product/${t("productTitleFour").replaceAll(" ","-")}/${t("titleFourSubTitleThree").replaceAll(" ","-")}`}>   {t("titleFourSubTitleThree")} </NavDropdown.Item>
                                        </DropdownSubmenu>
                                    </NavDropdownMenu>
                                </Nav>


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
                                <li className="nav-item">
                                    <Link className="nav-link primary-color" href="https://pouryasoleimani-adddesign.storage.c2.liara.space/DAV___KIMYA/TEST.pdf">{t("Catalogue")}</Link>
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
