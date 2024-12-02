import React, { useState } from 'react'
import styles from './PdfDownloadButton.module.css'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = { name: string, email: string, phone: number | string }

const PdfDownloadButton = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().min(8).required()
  }).required();
  const [show, setShow] = useState(false);

  // FUNCTIONS
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // RETURN =============================================================================================================================================
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* NAME */}
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label><span className='text-red-900 text-lg'>*</span> Name</Form.Label>
              <Form.Control type="text" placeholder=""  {...register("name")} />
              {errors.name && <span className='px-2  my-3 text-red-900'>Invalid Name</span>}
            </Form.Group>
            {/* EMAIL */}
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label><span className='text-red-900 text-lg'>*</span> Email</Form.Label>
              <Form.Control type="email" placeholder=""   {...register("email")} />
              {errors.email && <span className='px-2  my-3 text-red-900'>Invalid Email</span>}
            </Form.Group>
            {/* PHONE */}
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label><span className='text-red-900 text-lg'>*</span> Phone</Form.Label>
              <Form.Control type="tel" placeholder=""  {...register("phone")} />
              {errors.phone && <span className='px-2  my-3 text-red-900'>Invalid Phone</span>}
            </Form.Group>
            <div className='flex items-center justify-end mt-4 w-full h-full space-x-2'>
              <Button variant="secondary" onClick={handleClose} className='px-4 '>  Close </Button>
              <Button variant="success" type="submit" className='px-12' > Submit </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal >
    </>
  )
}

export default PdfDownloadButton