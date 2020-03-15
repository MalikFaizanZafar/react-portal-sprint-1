import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col } from "reactstrap";
import "../../employers.styles.css";
type SelectedProductPreviewProps = {};
const SelectedProductPreview: FunctionComponent<SelectedProductPreviewProps> = ({  children }) => {
  const [currentProducts] = useState([
    {
      id: 1,
      productTitle: "XYZ79827349372",
      postedDate: "21/07/2019",
      expiryDate: "21/07/2019"
    },
    {
      id: 1,
      productTitle: "XYZ79827349372",
      postedDate: "21/07/2019",
      expiryDate: "21/07/2019",
      purchased: "View"
    }
  ]);

  return (
    <Container className="p-0">
      {children}
      <Row className="px-5">
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="bg-primary text-white mt-3 py-2">
              <tr>
                <th className="py-4">O</th>
                <th className="py-4">#</th>
                <th className="py-4">Job Title</th>
                <th className="py-4">Posted Date</th>
                <th className="py-4">Expiry Date</th>
                <th className="py-4">Application</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((prod, i) => {
                return (
                  <tr key={i}>
                    <td className="py-4 ">
                      <input type="radio"/>
                    </td>
                    <td className="py-4"> {prod.id}</td>
                    <td className="py-4"> {prod.productTitle}</td>
                    <td className="py-4 ">{prod.postedDate}</td>
                    <td className="py-4 ">{prod.expiryDate}</td>
                    <td className="py-4 ">
                      <i className="fa fa-eye"></i>
                      {` View`}
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

export default SelectedProductPreview;
