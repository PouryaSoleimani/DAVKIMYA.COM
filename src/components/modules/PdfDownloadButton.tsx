import React from 'react'
import styles from './PdfDownloadButton.module.css'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const PdfDownloadButton = () => {
  return (
    /* From Uiverse.io by Quer3000 */
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <BsFillFileEarmarkPdfFill className='text-white w-16 h-16' />
      </div>
      <div className={styles.title}>
        <span>.PDF File</span>
      </div>
      <div className={styles.action}>
        <button className={styles.downloadButton}>
          <span className={styles.buttonText}>DOWNLOAD</span>
        </button>
      </div>
    </div>

  )
}

export default PdfDownloadButton