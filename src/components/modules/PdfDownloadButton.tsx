import React from 'react'
import styles from './PdfDownloadButton.module.css'

const PdfDownloadButton = () => {
  return (
    /* From Uiverse.io by Quer3000 */
    <div className={styles.card}>
      <div className={styles.image_container}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
      </div>
      <div className={styles.title}>
        <span>TheApp</span>
      </div>
      <div className='{styles.size}'>
        <span>Minecraft-Version</span>
        <ul className={styles.listSize}>
          <li className={styles.itemList}><button className={styles.itemListButton}>1.8.9</button></li>
          <li className={styles.itemList}>
            <button className={styles.itemListButton}>1.21.1</button>
          </li>
        </ul>
      </div>
      <div className={styles.action}>
        <button className={styles.downloadButton}>
          <span className={styles.buttonText}>DOWNLOAD</span>
          <span className={styles.buttonIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="download-svg"   >
              <path d="M17.5,22.131a1.249,1.249,0,0,1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" ></path>
              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>

  )
}

export default PdfDownloadButton