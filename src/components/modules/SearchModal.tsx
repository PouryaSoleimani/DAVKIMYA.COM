/* eslint-disable @typescript-eslint/no-explicit-any */
// ^ SEARCH MODAL ====================================================================================================================================================
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// COMPONENT ========================================================================================================================================================
const SearchModal = (props: any | null) => {
   return (
      <>
         <Modal   {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton className='bg-zinc-300 border-b-4 border-lime-400'>
               <Modal.Title id="contained-modal-title-vcenter">
                  Search
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="search" placeholder="Search Here ..." />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
         </Modal>
      </>
   )
}

export default SearchModal