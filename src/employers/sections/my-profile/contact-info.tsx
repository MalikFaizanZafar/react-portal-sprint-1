import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type ContactInfoProp = {

}
const ContactInfo: FunctionComponent<ContactInfoProp> = ({ children }) => {
    return (
        <Container className="p-0">
            {children}
            <Form className="job-form">
                <Row>
                    <Col md="6" sm="12">

                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Username </Label>
                            <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Enter user name" />
                        </FormGroup>
                    </Col>

                    <Col md="6" sm="12">
                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Contact Name <b style={{ color: 'red' }}>*</b></Label>
                            <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Enter contact name" required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" sm="12">
                    <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Email <b style={{ color: 'red' }}>*</b></Label>
                                    <Input className="form-input" type="email" name="jobTitle" id="job-title" placeholder="Enter Job Title" required />
                                </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <span style={{color:"#375e65", fontWeight:"unset"}}> Please provide the key contact person's name and email address for the AHC team to contact for support needs.</span>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
export default ContactInfo;