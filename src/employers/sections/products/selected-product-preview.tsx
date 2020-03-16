import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col, Card } from "reactstrap";
import "../../employers.styles.css";
type SelectedProductPreviewProps = {};
const SelectedProductPreview: FunctionComponent<SelectedProductPreviewProps> = ({
  children
}) => {
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

      <div className="" style={{ width: "100%", overflow: "auto" }}>
        <Row className="px-4 my-3">
          <Card
            style={{ borderLeft: "5px solid #04b3fd" }}
            className="w-100 px-5 py-4"
          >
            <div className="d-flex justify-content-between">
              <h5 className="text-primary">
                Contract Name : <span className="text-dark"> CAS123456</span>{" "}
              </h5>
              <h5 className="text-primary">
                Product Name : <span className="text-dark">2020123456789</span>{" "}
              </h5>
            </div>
            <div className="d-flex justify-content-between my-2">
              <h5 className="text-primary">
                Activation : <span className="text-dark">10 Feb 2014</span>{" "}
              </h5>
              <h5 className="text-primary">
                Expiry Date : <span className="text-dark">10 March 2014</span>{" "}
              </h5>
            </div>
          </Card>
        </Row>
        <Table hover className="mt-1 active-job-unprocessed-table">
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
                    <input type="radio" />
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
      </div>
    </Container>
  );
};

export default SelectedProductPreview;
