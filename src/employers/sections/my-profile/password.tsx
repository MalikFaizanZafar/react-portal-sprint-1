import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type PasswordProps ={

}

const Password: FunctionComponent<PasswordProps> = ({children}) =>{
    return (
        <Container className="p-0">
            {children}
            <Form className="job-form">
                <Row>
                    <Col md="6" sm="12">

                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">Current Password  <b style={{ color: 'red' }}>*</b></Label>
                            <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="25******" />
                        </FormGroup>
                    </Col>

                    <Col md="6" sm="12">
                        <FormGroup>
                            <Label for="exampleEmail" className="text-left">New Password <b style={{ color: 'red' }}>*</b></Label>
                            <Input className="form-input" type="text" name="jobTitle" id="job-title" placeholder="25******" required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" sm="12">

                    </Col>
                    <Col md="6" sm="12">
                    <FormGroup>
                                    <Label for="exampleEmail" className="text-left">Confirm New Password <b style={{ color: 'red' }}>*</b></Label> <span style={{background:'none',color: 'red',marginLeft:'110px' ,fontSize:'12px'}}>password doesn't matched</span>
                                    <Input className="form-input" type="email" name="jobTitle" id="job-title" placeholder="25**********" required />
                                </FormGroup>
                    </Col>
                </Row>
              
            </Form>
        </Container>
    )
}
export default Password;