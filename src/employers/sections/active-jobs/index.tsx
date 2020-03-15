import React, { useState } from "react";
import TabsNavigator from "../../tabs-navigator";
import ActiveJobsSubSection from "./active-jobs-subsection";
import InActiveJobsSubSection from "./in-active-jobs-subsection";


const ACTIVE_JOBS_TABS = ["Active Jobs", "Inactive Jobs"];
const ActiveJobs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const switchTabHandler = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="post-jobs-inner-div">
          {selectedTab === 0 && (
            <ActiveJobsSubSection>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </ActiveJobsSubSection>
          )}

          {selectedTab === 1 && (
            <InActiveJobsSubSection>
              <TabsNavigator
                onTabSwitch={index => switchTabHandler(index)}
                tabs={ACTIVE_JOBS_TABS}
                currentTab={selectedTab}
              />
            </InActiveJobsSubSection>
          )}
        </div>

        {/* {selectedTab === 1 && <JobLocation />}
                {selectedTab === 2 && <SalaryDetails />}
                {selectedTab === 3 && <JobSettings />} */}
        {/* <JobDetails /> */}
        {/* <Row>
                    <Col md="6" sm="12" xs="12" >
                        <span className="text-danger">Error</span>
                    </Col>
                    <Col md="6" sm="12" xs="12" >
                        <div className="d-flex justify-content-between">
                            <Button className="text-primary" >Save & Preview</Button>
                            <Button className="text-white btn btn-primary" >Post</Button>
                        </div>
                    </Col>
                </Row> */}
      </div>
    </React.Fragment>
  );
};

export default ActiveJobs;
