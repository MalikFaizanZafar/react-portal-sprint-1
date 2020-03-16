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
      <div className="" style={{ width: '100%',overflow: 'auto'}}>
           <table className="table table-striped table-bordered table-sm"
           style={{width:'100%'}} >
            <thead className="bg-primary text-white mt-3 py-2">
              <tr>
                <th className="">Contact</th>
                <th className="">Product</th>
                <th className="">Activation Date</th>
                <th className="">Expiry Date</th>
                <th className="">Purchased</th>
                <th className="">Used</th>
                <th className="">Available</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((prod, i) => {
                return (
                  <tr key={i} onClick={(prod) => productClickHandler(prod)}>
                    <td className=" ">{prod.contact}</td>
                    <td className=""> {prod.product}</td>
                    <td className=" ">{prod.activationDate}</td>
                    <td className=" ">{prod.expiryDate}</td>
                    <td className=" ">{prod.purchased}</td>
                    <td className=" ">{prod.used}</td>
                    <td className=" ">{prod.available}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </Container>
  );
};

export default CurrentProducts;
