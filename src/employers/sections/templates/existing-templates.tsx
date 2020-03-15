import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col, Button } from "reactstrap";
import "../../employers.styles.css";
type ExistingTemplatesProps = {
  // tabs: new (props: any) => React.Component
  templateSelect: (id : number) => void
};
const ExistingTemplates: FunctionComponent<ExistingTemplatesProps> = ({templateSelect, children }) => {
  const [templates] = useState([
    {
      name: "XXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
      name: "XXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
      name: "XXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
      name: "XXXXXXXXXXXXXXXXXXXXXXX"
    },
  ]);

  const templateClickHandler = (job: any) => {
    templateSelect(job.id)
  }
  return (
    <Container className="p-0">
      {children}
      <Row className="px-5">
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="active-job-unprocessed-table-thead bg-primary text-white mt-3 py-2">
              <tr>
                <th className="py-4">Template Name</th>
                <th className="py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template, i) => {
                return (
                  <tr key={i} onClick={(template) => templateClickHandler(template)}>
                    <td className="py-4 ">{template.name}</td>
                    <td className="py-4">
                    <Button color="link">Edit</Button>
                    <Button color="link">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ExistingTemplates;
