import React from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'


const EditSubUser = () =>{

    return(
        <Form className="job-form">
        <Row>
            <Col>
            <h3>Edit Sub-User</h3>
                <span> Fields marked with asterisk (*) are mandatory</span>
            </Col>
        </Row>

        <Row className="mt-3">
            <Col md="6" sm="12">
                <FormGroup>
                    <Label for="exampleEmail" className="text-left">Username <b style={{ color: 'red' }}>*</b> </Label>
                    <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Enter  username" />
                </FormGroup>

            </Col>
        </Row>

        <Row>
            <Col md="6" sm="12">
                <FormGroup>
                    <Label for="exampleEmail" className="text-left">Password <b style={{ color: 'red' }}>*</b> </Label>
                    <Input className="form-input" type="password" name="jobTitle" id="job-title" placeholder="Enter  password" />
                </FormGroup>

            </Col>
            <Col md="6" sm="12">
                <FormGroup>
                    <Label for="exampleEmail" className="text-left">Confirm Password <b style={{ color: 'red' }}>*</b> </Label>
                    <Input className="form-input" type="password" name="jobTitle" id="job-title" placeholder="Enter password again" />
                </FormGroup>

            </Col>
        </Row>
        <Row>
            <Col md="6" sm="12">
                <FormGroup>
                    <Label for="exampleEmail" className="text-left">Email <b style={{ color: 'red' }}>*</b> </Label>
                    <Input className="form-input" type="email" name="jobTitle" id="job-title" placeholder="Enter email" />
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
        <Row className="mt-5 mb-3">
        
            <Col md={{ size: 12 }} sm='12' className="text-right">
                <Button className="button-no-bg">CANCEL</Button>
                <Button className="button-gradient">SAVE & PREVIEW</Button>
            </Col>
        </Row>
    </Form>

    )
}

export default EditSubUser;