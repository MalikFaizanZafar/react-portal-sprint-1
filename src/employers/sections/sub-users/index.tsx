import React, { useState } from 'react';
import TabsNavigator from '../../components/tabs-navigator';
import ExistingSubUsers from './existing-sub-users';
import CreateNewSubUser from './create-new-sub-user';
import { Row, Col, Button } from 'reactstrap';
const SUB_USERS_TABS = [
    'Existing Sub-Users',
    'Create New Sub User'
  ]
const SubUsers = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const switchTabHandler = (index: number) => {
        setSelectedTab(index);
    }
    return(
        <React.Fragment>
        <div className="container p-0">
            <div className="post-jobs-inner-div">
                {selectedTab === 0 &&
                    <ExistingSubUsers>
                        <TabsNavigator
                            onTabSwitch={(index) => switchTabHandler(index)}
                            tabs={SUB_USERS_TABS}
                            currentTab={selectedTab}
                        />
                    </ExistingSubUsers>}
                {selectedTab === 1 &&
                    <CreateNewSubUser>
                        <TabsNavigator
                            onTabSwitch={(index) => switchTabHandler(index)}
                            tabs={SUB_USERS_TABS}
                            currentTab={selectedTab}
                        />
                    </CreateNewSubUser>}
               
            </div>
  <Row className="mt-5 mb-3">
      <Col md={{size:11 }} sm='11' className="text-right">
          <Button className="button-no-bg">CANCEL</Button>
          <Button className="button-gradient">SAVE & PREVIEW</Button>
      </Col>
  </Row>
    
    
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
    )
}

export default SubUsers;