import React, { useState } from "react";
import TabsNavigator from "../../components/tabs-navigator";
import ReportsActiveJobs from "./reports-active-jobs";
import ReportsInActiveJobs from "./reports-inactive-jobs";


const ACTIVE_JOBS_TABS = ["Active Jobs", "Inactive Jobs"];
const Reports = () => {
  const [jobSelected, setJobSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const switchTabHandler = (index: number) => {
    setSelectedTab(index);
  };

  const jobSelectHandler = (id : number) => {
    console.log("id ", id);
    setJobSelected(true);
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="post-jobs-inner-div">
          {jobSelected === false && selectedTab === 0 && (
            <ReportsActiveJobs jobSelect={index => jobSelectHandler(index)}>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </ReportsActiveJobs>
          )}

          {jobSelected === false && selectedTab === 1 && (
            <ReportsInActiveJobs jobSelect={index => jobSelectHandler(index)}>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </ReportsInActiveJobs>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reports;
