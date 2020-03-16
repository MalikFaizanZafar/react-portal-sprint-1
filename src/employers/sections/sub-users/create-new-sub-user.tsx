import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CreateNewSubUserProps = {

}
const CreateNewSubUser: FunctionComponent<CreateNewSubUserProps> = ({ children }) => {

    return (
        
        <div className=" container p-0 check" style={{paddingLeft:"0px"}}>
            {children}
            <Form className="job-form">
        <Row>
            <Col>
            <span> Fields marked with asterisk (*) are mandatory</span>
            </Col>
        </Row>
            </Form>

        </div>
    )
}
export default CreateNewSubUser;