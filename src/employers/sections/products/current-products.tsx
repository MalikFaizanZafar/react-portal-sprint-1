import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col } from "reactstrap";
import "../../employers.styles.css";
type CurrentProductsProps = {
  // tabs: new (props: any) => React.Component,
  productSelect: (id : string) => void
};
const CurrentProducts: FunctionComponent<CurrentProductsProps> = ({ productSelect, children }) => {
  const [currentProducts] = useState([
    {
      contact: 'CA234233',
      product: "XYZ79827349372",
      activationDate: "21/07/2019",
      expiryDate: "21/07/2019",
      purchased: "Unlmited",
      used: 0,
      available: "Unlmited"
    },
    {
      contact: 'CA234233',
      product: "XYZ79827349372",
      activationDate: "21/07/2019",
      expiryDate: "21/07/2019",
      purchased: "Unlmited",
      used: 0,
      available: "Unlmited"
    }
  ]);

  const productClickHandler = (prod: any) => {
    productSelect(prod.product)
  }

  return (
    <Container className="p-0">
      {children}
      <Row className="px-5">
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="bg-primary text-white mt-3 py-2">
              <tr>
                <th className="py-4">Contact</th>
                <th className="py-4">Product</th>
                <th className="py-4">Activation Date</th>
                <th className="py-4">Expiry Date</th>
                <th className="py-4">Purchased</th>
                <th className="py-4">Used</th>
                <th className="py-4">Available</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((prod, i) => {
                return (
                  <tr key={i} onClick={(prod) => productClickHandler(prod)}>
                    <td className="py-4 ">{prod.contact}</td>
                    <td className="py-4"> {prod.product}</td>
                    <td className="py-4 ">{prod.activationDate}</td>
                    <td className="py-4 ">{prod.expiryDate}</td>
                    <td className="py-4 ">{prod.purchased}</td>
                    <td className="py-4 ">{prod.used}</td>
                    <td className="py-4 ">{prod.available}</td>
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

export default CurrentProducts;
