import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';
type CreateNewTemplateProp={

}
const CreateNewTemplate:FunctionComponent<CreateNewTemplateProp> = ({children}) => {
  return(
 <Container>
   {children}
 </Container>
  )
}

export default CreateNewTemplate;