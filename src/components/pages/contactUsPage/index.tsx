"use client"
// ^ CONTACT US PAGE =========================================================================================================================================================

import { useTranslation } from "@/core/i18n/client";
import Link from "next/link";
import { LuMail, LuPhoneForwarded } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type Inputs = { Name: string, Email: string, Phone: number, Subject: string, Message: string, }


//  COMPONENT =============================================================================================================================================================
const ContactUsPage = () => {
  const { t } = useTranslation()
  const schema = yup.object().shape({ Name: yup.string().required(), Email: yup.string().email().required(), Phone: yup.number().min(7).required(), Subject: yup.string().required(), Message: yup.string().required() }).required();
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });
  //* ON SUBMIT
  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }

  // RETURN =================================================================================================================================================================
  return (
    <>
      {/* TITLE */}

      <section id="contact-title" className="d-flex align-items-center top justify-content-center py-5 px-2 position-relative">
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1"> {t("contactUs")}</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link href="/" className="d-block primary-color fw-bold text-decoration-none">{t("home")}</Link>
            <span>/</span>
            <span className="text-white-50"> {t("contactUs")}</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container my-5 left">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="container px-0 position-relative text-center text-lg-start">
              <div className="h3 underline decoration-2 underline-offset-8 decoration-lime-400 font-semibold tracking-tight"> {t("contactUs")}</div>
              <h1 className="my-3 text-4xl font-semibold">
                DAV {t("petroChemichal")}
              </h1>
              <SlLocationPin className="w-6 h-8 text-lime-400" />

              <p className="fw-bold border-bottom pb-3">DAV {t("petroChemichal")}</p>
              <LuPhoneForwarded className='text-lime-400 my-3 w-6 h-6' />
              <p className="fw-bold mt-3">
                +905346879096
              </p>
              <LuPhoneForwarded className='text-lime-400 my-3 w-6 h-6' />
              <p className="fw-bold mt-3">
                +905065034338
              </p>
              <LuMail className='text-lime-400 my-3  w-6 h-6' />
              <p className="fw-bold mt-3"> info@davkimya.com</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 ">

            {/* //^ FORM ^// */}
            <form className="p-4 position-relative" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="_token" value="TemgBZMxpotKu8QhcNPF49QQFQ00aW1XK4SZw77f" />
              <div className="position-relative">
                <h4 className="fw-bold text-2xl py-1">
                  {t("formTitle")}
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <input className="form-control my-3" placeholder={t("formName")} {...register("Name")} />
                    {errors.Name && <span className="text-red-800 pl-2 bg-red-100 px-3 rounded-lg py-1">{t("formNameNotValid")}</span>}
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control my-3" placeholder={t("formEmail")}  {...register("Email")} />
                    {errors.Email && <span className="text-red-800 pl-2  bg-red-100 px-3 rounded-lg py-1">{t("formEmailNotValid")}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input type="tel" className="form-control my-3" placeholder={t("formPhone")}   {...register("Phone")} />
                    {errors.Phone && <span className="text-red-800 pl-2 bg-red-100 px-3 rounded-lg py-1 ">{t("formPhoneNotValid")}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input className="form-control my-3" placeholder={t("formSubject")}  {...register("Subject")} />
                    {errors.Subject && <span className="text-red-800 pl-2  bg-red-100 px-3 rounded-lg py-1">{t("formSubjectNotValid")}</span>}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <textarea rows={7} className="form-control" placeholder={t("formMessage")}  {...register("Message")}></textarea>
                    {errors.Message && <span className="text-red-800 pl-2 bg-red-100 px-3 rounded-lg py-1 pt-10 ">{t("formMessageNotValid")}</span>}
                  </div>
                </div>
                <button type="submit" className="d-flex bg-black align-items-center mt-3 justify-content-center w-100 fw-bold gap-1 border-0 py-2 text-white transition text-decoration-none" >
                  <span className="h6 mb-0">{t("formSend")}</span>
                  <FaArrowRight className="w-5 h-5 m-2" />
                </button>
              </div>
            </form>


          </div>
          <div className="col-lg-4 col-12">

            {/* <iframe
              className="w-100 border-none"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12035.468090317363!2d28.948459!3d41.050037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62c25433d16d6951!2zNDHCsDAzJzAwLjEiTiAyOMKwNTYnN"
              height="400" allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe> */}
            <div style={{ width: "100%" , margin : "0 1rem" }}>
              <iframe width="100%" height="428" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(DavKimya%20Co.)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
            <h3 className="fw-bold mt-4 text-center text-lg-start">
              {t("contactUsFollow")}
            </h3>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mt-3 socials">
              <a href="https://www.facebook.com/dav" className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                <FaFacebook className='w-7 h-7 text-white' />
              </a>
              <a href="https://twitter.com/dav"
                className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                <FaTwitter className='w-7 h-7 text-white' />
              </a>
              <a href="https://www.instagram.com/dav/"
                className="d-block primary-bg transition rounded-circle p-2 d-flex align-items-center justify-content-center">
                <FaInstagram className='w-7 h-7 text-white' />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
};
export default ContactUsPage;
