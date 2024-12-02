import React, { useState } from 'react'
import styles from './PdfDownloadButton.module.css'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const PdfDownloadButton = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <BsFillFileEarmarkPdfFill className='text-white w-16 h-16' />
        </div>
        <div className={styles.title}>
          <span>.PDF File</span>
        </div>
        <div className={styles.action}>
          <Button className={styles.downloadButton} variant='ghost' onClick={handleShow}>
            <span className={styles.buttonText}>DOWNLOAD</span>
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* NAME */}
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label><span className='text-red-900 text-lg'>*</span> Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            {/* EMAIL */}
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label><span className='text-red-900 text-lg'>*</span> Email</Form.Label>
              <Form.Control type="email" placeholder="" />
              {/* <Form.Text className="text-muted"> We&apos;ll never share your email with anyone else.</Form.Text> */}
            </Form.Group>
            {/* PHONE */}
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label><span className='text-red-900 text-lg'>*</span> Phone</Form.Label>
              <Form.Control type="phone" placeholder="" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PdfDownloadButton