// ^ DONWLOAD BUTTON COMPONENT ===================================================================================================================
import React from 'react'
import { FaDownload } from "react-icons/fa6";
const DownloadButton = () => {
   return (
      <button className="group relative inline-flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg transform scale-100 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
         <FaDownload className='w-10 h-10' />
      </button>

   )
}

export default DownloadButton