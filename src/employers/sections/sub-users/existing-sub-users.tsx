import React, { FunctionComponent } from 'react';
import { Form, Button, FormGroup, FormText, Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import '../../employers.styles.css'

type ExistingSubUsersProps={

}
const ExistingSubUsers:FunctionComponent<ExistingSubUsersProps> = ({children}) =>{

    return(
       <Container>
           {children}
       </Container>
    )
}
export default ExistingSubUsers;