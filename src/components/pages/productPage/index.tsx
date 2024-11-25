"use client"
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ProductPage = () => {
  useEffect(() => { AOS.init(); AOS.refresh() }, []);
  return (
    <>
      {/* ARTICLE TITLE */}
      <section data-aos="fade-down" id="article-title" className="d-flex top align-items-center justify-content-center py-5 px-2 position-relative" data-sr-id="0" style={{ visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 2s ease-out 0.5s transform 2s ease-out 0.5s" }}>
        <div className="container text-white fw-bold text-center my-5 py-5 position-relative">
          <h1 className="display-1">Our Product</h1>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <Link href="/en/" className="d-block primary-color fw-bold text-decoration-none">Home</Link>
            <span>/</span>
            <Link href="/en/product" className="text-white-50">
              Product
            </Link>
          </div>
        </div>
      </section >


      <section id="articles" className="mt-5 py-5 left" data-sr-id="2" style={{ visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "all opacity 2s ease-out 0.5s transform 2s ease-out 0.5s" }}>
        <div className="container">
          <div className="text-center">
            <span className="h3">
              Our Product
            </span>
          </div>
          <div className="row g-4 mt-5">
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/35" className="title_h1">
                    Polymeric Emulsion System
                  </Link>
                  <hr />
                  <Link href="https://davkimya.com/en/product/36" className="title_h5">
                    Adhesives and sealants
                  </Link>
                  <Link href="https://davkimya.com/en/product/37" className="title_h5">
                    Paint and coating application
                  </Link>
                  <Link href="https://davkimya.com/en/product/38" className="title_h5">
                    Tape and label
                  </Link>
                  <Link href="https://davkimya.com/en/product/39" className="title_h5">
                    Textile application
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/40" className="title_h1">
                    Polyurethanes
                  </Link>
                  <hr />
                  <Link href="https://davkimya.com/en/product/41" className="title_h5">
                    Polyester polyols
                  </Link>
                  <Link href="https://davkimya.com/en/product/42" className="title_h5">
                    Spray polyurethane system
                  </Link>
                  <Link href="https://davkimya.com/en/product/43" className="title_h5">
                    High-Density PU Foams
                  </Link>
                  <Link href="https://davkimya.com/en/product/44" className="title_h5">
                    Rigid PU and PIR for Composite Panel Insulation
                  </Link>
                  <Link href="https://davkimya.com/en/product/45" className="title_h5">
                    Industrial Insulation Foams
                  </Link>
                  <Link href="https://davkimya.com/en/product/46" className="title_h5">
                    Bio-based Polyurethanes
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/53" className="title_h1">
                    Engineered Polymeric Compounds
                  </Link>
                  <hr />
                  <Link href="https://davkimya.com/en/product/54" className="title_h5">
                    Plastics for the Lighting Industry
                  </Link>
                  <Link href="https://davkimya.com/en/product/59" className="title_h5">
                    Electronic and Electrical Industry
                  </Link>
                  <Link href="https://davkimya.com/en/product/62" className="title_h5">
                    Household Appliances and Automobile Industry
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 col-sm-6">
              <div className="card_category">
                <div >
                  <Link href="https://davkimya.com/en/product/66" className="title_h1">
                    Mastic and sealants
                  </Link>
                  <hr />
                  <Link href="https://davkimya.com/en/product/67" className="title_h5">
                    Acrylic copolymer sealants
                  </Link>
                  <Link href="https://davkimya.com/en/product/68" className="title_h5">
                    Similar silicon sealants
                  </Link>
                  <Link href="https://davkimya.com/en/product/69" className="title_h5">
                    MS polymer-based sealants
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12">
            </div>

          </div>

        </div>
      </section >
    </>

  )
};
export default ProductPage;
