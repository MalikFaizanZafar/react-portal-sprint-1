import React, { useState } from "react";
import TabsNavigator from "../../tabs-navigator";
import ExistingTemplates from "./existing-templates";
import CreateNewTemplate from "./create-new-template";


const ACTIVE_JOBS_TABS = ["Existing Templates", "Create New Template"];
const Templates = () => {
  const [templateSelected, setTemplateSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const switchTabHandler = (index: number) => {
    setSelectedTab(index);
  };

  const templateSelectHandler = (id : number) => {
    console.log("id ", id);
    setTemplateSelected(true);
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="post-jobs-inner-div">
          {templateSelected === false && selectedTab === 0 && (
            <ExistingTemplates templateSelect={index => templateSelectHandler(index)}>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </ExistingTemplates>
          )}

          {templateSelected === false && selectedTab === 1 && (
            <CreateNewTemplate>
     <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />     
              </CreateNewTemplate>         
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Templates;
