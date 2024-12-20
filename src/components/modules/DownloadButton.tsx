// ^ DONWLOAD BUTTON COMPONENT ===================================================================================================================
import React from 'react'
import { FaDownload } from "react-icons/fa6";
// import TESTPDF from "https://davkimya.com/assets/uploads/setting/Slider/1402-05-07/photos/photo-17ee7b11900de071a6ca81f4ead407ae.jpg"
import Link from 'next/link';

const DownloadButton = () => {
   return (
      
      <Link download={true} href="https://pouryasoleimani-adddesign.storage.c2.liara.space/DAV___KIMYA/DAV%20catalog.pdf" className="group relative inline-flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg transform scale-100 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 duration-500" target="_blank" rel="noopener noreferrer">
         <FaDownload className='w-6 h-6' />
      </Link>

   )
}

export default DownloadButton