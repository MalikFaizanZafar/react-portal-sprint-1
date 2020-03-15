import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type ContactInfoProp ={

}
const ContactInfo: FunctionComponent<ContactInfoProp> = ({children}) =>{
    return (
        <Container>
            {children}
            <h2>
                Contact Info
            </h2>
        </Container>
    )
}
export default ContactInfo;