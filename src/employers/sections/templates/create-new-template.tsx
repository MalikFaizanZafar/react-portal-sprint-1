import React, { FunctionComponent,useState } from 'react';

import { Form, Button, FormGroup, FormText, Modal, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CreateNewTemplateProp = {

}
const CreateNewTemplate: FunctionComponent<CreateNewTemplateProp> = ({ children }) => {
  const [limitModal, setModal] = useState(false);

  const toggle = () => setModal(!limitModal);
  const setLimitModal = (modalState : boolean)=>{
    setModal(true);
  }
  return (
    <Container className="p-0">
      {children}

      <Form className="job-form">
        <Row>
          <Col >
            <h3>Template details</h3>
          </Col>
        </Row>
        <Row>
          <Col >
            <span style={{ background: 'none' }}>Fields marked with asterik (*) are mandatory.</span>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <FormGroup>
              <Label for="exampleEmail" className="text-left">Template Name <b style={{ color: 'red' }}>*</b> </Label>
              <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Enter  company name" />
            </FormGroup>
          </Col>

        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail" className="text-left">Text <b style={{ color: 'red' }}>*</b> </Label>
              <Input className="form-input" type="textarea" rows="10" name="jobTitle" id="job-title" placeholder="Enter  company name" />
            </FormGroup>
          </Col>

        </Row>

      </Form>

      <Modal isOpen={limitModal} toggle={() => setLimitModal(!limitModal)} centered>
          <Row className="p-4">
            <span className="limit-cancel-button">x</span>
        <Col className="text-center">
          <div className="mb-5" style={{fontWeight:"bold",color:'#484d50'}} >
          You've reached the maximum number of templates
          </div>
   
        
        </Col>
          </Row>
     
        </Modal>
    </Container>
  )
}

export default CreateNewTemplate;