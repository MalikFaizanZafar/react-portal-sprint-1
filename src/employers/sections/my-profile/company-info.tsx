import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type CompanyInfoProp ={

}
const CompanyInfo: FunctionComponent<CompanyInfoProp> = ({children}) =>{
    return (
        <Container>
            {children}
            <h2>
                CompanyInfo
            </h2>
        </Container>
    )
}
export default CompanyInfo;