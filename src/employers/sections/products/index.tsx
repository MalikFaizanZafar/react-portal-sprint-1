import React, { useState } from "react";
import TabsNavigator from "../../tabs-navigator";
import CurrentProducts from "./current-products";
import ExpiredProducts from "./expired-products";
import SelectedProductPreview from "./selected-product-preview";

const POST_JOBS_TABS = ["Current Products", "Expired Products"];
const Products = () => {
  const [productSelected, setProductSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const switchTabHandler = (index: number) => {
    setSelectedTab(index);
  };

  const productSelectHandler = (id : string) => {
    console.log("id ", id);
    setProductSelected(true);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="post-jobs-inner-div">
          {productSelected === false && selectedTab === 0 && (
            <CurrentProducts productSelect={(id) => productSelectHandler(id)}>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={POST_JOBS_TABS}
                currentTab={selectedTab}
              />
            </CurrentProducts>
          )}
          {productSelected === false && selectedTab === 1 && (
            <ExpiredProducts productSelect={(id) => productSelectHandler(id)}>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={POST_JOBS_TABS}
                currentTab={selectedTab}
              />
            </ExpiredProducts>
          )}
          {
            productSelected === true && (
              <SelectedProductPreview />
            )
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
