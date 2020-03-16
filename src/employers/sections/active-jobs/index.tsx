import React, { useState } from "react";
import TabsNavigator from "../../components/tabs-navigator";
import ActiveJobsSubSection from "./active-jobs-subsection";
import InActiveJobsSubSection from "./in-active-jobs-subsection";
import SelectedJobPreview from "./selected-job-preview";


const ACTIVE_JOBS_TABS = ["Active Jobs", "Inactive Jobs"];
const ActiveJobs = () => {
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
            <ActiveJobsSubSection jobSelect={(id) => jobSelectHandler(id)}>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </ActiveJobsSubSection>
          )}

          {jobSelected === false && selectedTab === 1 && (
            <InActiveJobsSubSection>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </InActiveJobsSubSection>
          )}
        </div>
        {
            jobSelected === true && (
                <SelectedJobPreview />
            )
        }
      </div>
    </React.Fragment>
  );
};

export default ActiveJobs;
