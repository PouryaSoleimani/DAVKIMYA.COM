import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppLink = () => {
   return (

      <section className="flex justify-center items-center  fixed right-12 bottom-16 z-[999] overflow-visible">
         <Link href="https://wa.me/989033162444" className="group flex flex-col items-center justify-center p-2 rounded-md drop-shadow-xl bg-[#1ED760] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%]  transition-all duration-500 hover:from-[#331029] hover:to-[#310413]" target='_blank'>
            <FaWhatsapp className="w-10 h-10" />
            <span className="z-50 absolute -bottom-6 font-semibold  tracking-wide  text-transparent group-hover:text-black duration-500">
               WhatsApp
            </span>
         </Link>
      </section>
   )
}

export default WhatsAppLink