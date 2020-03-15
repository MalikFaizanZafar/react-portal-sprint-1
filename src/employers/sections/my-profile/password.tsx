import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type PasswordProps ={

}

const Password: FunctionComponent<PasswordProps> = ({children}) =>{
    return (
        <Container>
            {children}
            <h2>
                Password
            </h2>
        </Container>
    )
}
export default Password;