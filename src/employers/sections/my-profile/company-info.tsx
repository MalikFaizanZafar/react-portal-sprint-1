import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CompanyInfoProp = {

}
const CompanyInfo: FunctionComponent<CompanyInfoProp> = ({ children }) => {
    return (
        <Container className="p-0">
            {children}
            <Form className="job-form">
                <Row>
                    <Col md="6" sm="12">

                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Company Name <b style={{ color: 'red' }}>*</b> </Label>
                            <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Enter  company name" />
                        </FormGroup>
                    </Col>

                    <Col md="6" sm="12">
                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Website <b style={{ color: 'red' }}>*</b></Label>
                            <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="Example:abc.com" required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" sm="12">
                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Address </Label>
                            <Input className="form-input" type="textarea" name="jobTitle" id="job-title" placeholder="Enter Job Title" required />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md="6" sm="12">

                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Location <b style={{ color: 'red' }}>*</b> </Label>
                            <Input className="form-input" type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input> </FormGroup>
                    </Col>

                    <Col md="6" sm="12">
                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">City/District <b style={{ color: 'red' }}>*</b></Label>
                            <Input className="form-input" type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input> </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="12" >
                        <FormGroup>
                        <Row>
                            <Col> <Label for="exampleEmail" className="text-left">Phone Number </Label>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="2">
                                <Input className="form-input" type="number" min="0" name="jobTitle" id="job-title" placeholder="+823" required />
                            </Col>
                            <Col md="10">
                                <Input className="form-input" type="number" min="0" name="jobTitle" id="job-title" placeholder="5555558855" required />
                            </Col>
                        </Row>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col >
                    <FormGroup>
                            <Label for="exampleEmail" className="text-left">Company Description <b style={{ color: 'red' }}>*</b> </Label>
                            <Input className="form-input" rows="4" type="textarea" name="jobTitle" id="job-title" placeholder="Enter Job Title" required />
                        </FormGroup>
                    </Col>
                </Row>




            </Form>
        </Container>
    )
}
export default CompanyInfo;