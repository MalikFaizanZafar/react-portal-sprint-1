import React, { FunctionComponent } from 'react';

import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type EditTemplateModalProp = {
    template: any
}
const EditTemplateModal: FunctionComponent<EditTemplateModalProp> = ({ children, template }) => {
    return (
        <Container className="p-0">

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
                <Row>
                    <Col className="text-left">
                        <span className="text-danger "> Error:xxxxxxxxxxxxxx</span>
                    </Col>
                </Row>

                <Row className="mt-5 mb-3">
                    <Col md={{ size: 12 }} sm='12' className="text-right">
                        <Button className="button-no-bg" >CANCEL</Button>
                        <Button className="button-gradient modal-save-button" type="button">SAVE </Button>
                    </Col>
                </Row>



            </Form>
        </Container>
    )
}

export default EditTemplateModal;