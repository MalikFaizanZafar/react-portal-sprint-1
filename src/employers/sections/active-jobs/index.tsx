import React, { useState } from "react";
import TabsNavigator from "../../tabs-navigator";
import ActiveJobsSubSection from "./active-jobs-subsection";
import InActiveJobsSubSection from "./in-active-jobs-subsection";
import ActiveJobsTwo from "./index-two";


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
                <ActiveJobsTwo />
            )
        }
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
