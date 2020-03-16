import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import '../../employers.styles.css'

type ExistingSubUsersProps={

}
const ExistingSubUsers:FunctionComponent<ExistingSubUsersProps> = ({children}) =>{
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [existingSubUsers] = useState([
      {
        id: 'hsdkfhsdlkfh',
        username: "XXXXXXXXXXXXXXXXXXXXXXX",
        email:"xx@gmail.com"
      },
      {
        id: 'hsdkfhsdlkfh',
        username: "XXXXXXXXXXXXXXXXXXXXXXX",
        email:"xx@gmail.com"
      },
      {
        id: 'hsdkfhsdlkfh',
        username: "XXXXXXXXXXXXXXXXXXXXXXX",
        email:"xx@gmail.com"
      },
      {
        id: 'hsdkfhsdlkfh',
        username: "XXXXXXXXXXXXXXXXXXXXXXX",
        email:"xx@gmail.com"
      },
    ]);
    const toggle = () => setModal(!modal);

    const editClickHandler = (id: string) => {
      setModal(true);
    }
    return(
       <div>
           {children}
           <Row className="">
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="active-job-unprocessed-table-thead bg-primary text-white mt-3 py-2">
              <tr>
                <th className="">User Name</th>
                <th className="">Email</th>
                <th className="">Actions</th>
                
              </tr>
            </thead>
            <tbody>
              {existingSubUsers.map((user, i) => {
                return (
                  <tr key={i}>
                    <td className="">{user.username}</td>
                    <td className="">{user.email}</td>
                    <td className="">
                      <Button onClick={() => editClickHandler(user.id)} color="link">Edit</Button>
                      <Button onClick={() => setDeleteModal(true)} color="link">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row >
        <Modal className="modal-lg custom-modal" style={{ width: 'width: 90vw' }} isOpen={modal} toggle={toggle} centered >
          {/* <EditTemplateModal template={null} /> */}
        </Modal>
      </Row>
      <Row>
        <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} centered>
          <Row className="p-4">
            <Col>

            <Row >
            <Col>
              <h5 style={{color:'#375e65',fontWeight:'bold'}}> Confirm delete?</h5>
            </Col>
          </Row>
          <Row className="mt-2 mb-3">
            <Col md={{ size: 12 }} sm='12' className="text-right">
              <Button className="button-no-bg" >CANCEL</Button>
              <Button className="button-gradient modal-save-button" type="button">Yes </Button>
            </Col>
          </Row>
            </Col>
          </Row>
     
        </Modal>
      </Row>

       </div>
    )
}
export default ExistingSubUsers;