import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CreateNewSubUserProps = {

}
const CreateNewSubUser: FunctionComponent<CreateNewSubUserProps> = ({ children }) => {

    return (

        <div className=" container p-0 check" style={{ paddingLeft: "0px" }}>
            {children}
            <Form className="job-form">
                <Row>
                    <Col>
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
                    <Col md="6" sm="12" className="text-left">
                        <span className="text-danger">erorr:xxxxxxxxxxxxxxxxx</span>
                    </Col>
                    <Col md={{ size: 6 }} sm='12' className="text-right">
                        <Button className="button-no-bg">CANCEL</Button>
                        <Button className="button-gradient">SAVE & PREVIEW</Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}
export default CreateNewSubUser;