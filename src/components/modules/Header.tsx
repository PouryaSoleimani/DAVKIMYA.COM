/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { LuMail, LuMenuSquare, LuPhoneForwarded } from 'react-icons/lu'
// IMAGES
import ArabicFlag from './../../../public/Home_files/ARABIC__FLAG.png'
import TurkishFlag from '../../../public/Home_files/TURKISH__FLAG.png'
import RussianFlag from '../../../public/Home_files/RUSSIAN__FLAG.png'
import HeaderLogo from '../../../public/images/logo/HOME__PAGE__LOGO.webp'


// COMPONENT
const Header = () => {

    return (
        <header>
            {/*  contact  */}
            <div className="border-bottom">
                <div
                    className="d-flex flex-wrap gap-4 align-items-center justify-content-md-between justify-content-center container py-3">
                    {/* <!-- CONTACT INFOS --> */}
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

                    {/* <!-- SOCIALS AND LANGUAGES --> */}
                    <div className="d-flex align-items-center gap-2">
                        {/* LANGUAGES */}
                        <Link href="https://davkimya.com/tr" className="d-block primary-bg transition rounded-circle d-flex align-items-center justify-content-center">
                            <Image src={TurkishFlag} className="lang_menu " alt="tr" width={50} height={50} />
                        </Link>
                        <Link href="https://davkimya.com/ru" className="d-block primary-bg transition rounded-circle d-flex align-items-center justify-content-center">
                            <Image src={RussianFlag} className="lang_menu" alt="ru" width={30} height={30} />
                        </Link>
                        <Link href="https://davkimya.com/ar" className="d-block primary-bg transition rounded-circle d-flex align-items-center justify-content-center">
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


            {/* <!-- menu && logo --> */}
            <div className='bg-[#474841]'>
                {/* <!-- menu --> */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary container p-0 bg-[#474841]">
                    <div className="container-fluid bg-[#474841] ">
                        {/* <!-- logo --> */}
                        <Link className="navbar-brand" href="/">
                            <Image src={HeaderLogo} alt="daav" className="img-fluid py-3" width={90} height={90} />
                        </Link>



                        {/* //* NAVBAR */}
                        <nav >
                            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#c3eb40] rounded-lg md:hidden " aria-controls="navbar-multi-level" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                                <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                        <li>
                                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                                        </li>
                                        <li>
                                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg></button>
                                            {/* <!-- Dropdown menu --> */}
                                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                    </li>
                                                    <li aria-labelledby="dropdownNavbarLink">
                                                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg></button>
                                                        <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                    </li>
                                                </ul>
                                                <div className="py-1">
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>



                    </div>
                </nav>
                {/* <!-- </nav> --> */}
            </div>
        </header >
    )
}

export default Header