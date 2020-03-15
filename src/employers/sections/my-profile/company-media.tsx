import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CompanyMediaProp ={

}
const CompanyMedia: FunctionComponent<CompanyMediaProp> = ({children}) =>{
    return (
        <Container>
            {children}
            <h2>
                Company Media
            </h2>
        </Container>
    )
}
export default CompanyMedia;