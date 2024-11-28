import Link from "next/link"

const WithSubTitleBox = ()=>{
    return(
        <div className="col-xxl-3 col-md-4 col-sm-6">
        <div className="card_category">
          <div>
            <Link
              href="https://davkimya.com/en/product/35"
              className="title_h1"
            >
              Polymeric Emulsion System
            </Link>
            <hr />
            <Link
              href="https://davkimya.com/en/product/36"
              className="title_h5"
            >
              Adhesives and sealants
            </Link>
            <Link
              href="https://davkimya.com/en/product/37"
              className="title_h5"
            >
              Paint and coating application
            </Link>
            <Link
              href="https://davkimya.com/en/product/38"
              className="title_h5"
            >
              Tape and label
            </Link>
            <Link
              href="https://davkimya.com/en/product/39"
              className="title_h5"
            >
              Textile application
            </Link>
          </div>
        </div>
      </div>)
}
export {WithSubTitleBox}