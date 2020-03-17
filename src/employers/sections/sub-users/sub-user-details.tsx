import React from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'


const SubUserDetails = () =>{

    return(
        <Form className="job-form">
              <span className="limit-cancel-button">x</span>
        <Row>
            <Col>
            <h3>Sub-User Details</h3>
                
            </Col>
        </Row>

   

        <Row>
            <Col md="6" sm="12">
                <FormGroup>
                    <Label for="exampleEmail" className="text-left">Username  </Label>
                    <Input className="form-input" type="text" readOnly name="jobTitle" id="job-title" placeholder="xxxxxxxx" />
                </FormGroup>

            </Col>
            <Col md="6" sm="12">
                <FormGroup>
                    <Label for="exampleEmail" className="text-left">Email </Label>
                    <Input className="form-input" type="email" readOnly name="jobTitle" id="job-title" placeholder="xxxxxxxxxxxx" />
                </FormGroup>

            </Col>
        </Row>

        <Row>
            <Col md="6" sm="12">
                <FormGroup className="mb-1">
                    <Label for="exampleEmail" className="text-left">UserRights <b style={{ color: 'red' }}>*</b> </Label>

                </FormGroup>

            </Col>
        </Row>
        <Row className="mt-1">
            <Col>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" className="checkbox" />{' '}
                             Post Jobs
                                </Label>
                </FormGroup>
            </Col>
        </Row>
        <Row className="mt-1">
            <Col>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" className="checkbox" />{' '}
                            Manage listings and applications
                                </Label>
                </FormGroup>
            </Col>
        </Row>
        <Row className="mt-1">
            <Col>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" className="checkbox" />{' '}
                         Manage Templates
                                </Label>
                </FormGroup>
            </Col>
        </Row>
 
    </Form>

    )
}

export default SubUserDetails;