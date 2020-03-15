import React, { useState } from 'react';
import TabsNavigator from '../../tabs-navigator';
import ContactInfo from './contact-info';
import CompanyInfo from './company-info';
import CompanyMedia from './company-media';
import Password from './password';
const MY_PROFILE_TABS = [
    'Contact info',
    'Company info',
    'Company media',
    'Password']
const MyProfile = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const switchTabHandler = (index: number) => {
        setSelectedTab(index);
    }
    return(
        <React.Fragment>
        <div className="container">
            <div className="post-jobs-inner-div">
                {selectedTab === 0 &&
                    <ContactInfo>
                        <TabsNavigator
                            onTabSwitch={(index) => switchTabHandler(index)}
                            tabs={MY_PROFILE_TABS}
                            currentTab={selectedTab}
                        />
                    </ContactInfo>}
                {selectedTab === 1 &&
                    <CompanyInfo>
                        <TabsNavigator
                            onTabSwitch={(index) => switchTabHandler(index)}
                            tabs={MY_PROFILE_TABS}
                            currentTab={selectedTab}
                        />
                    </CompanyInfo>}
                {selectedTab === 2 &&
                    <CompanyMedia>
                        <TabsNavigator
                            onTabSwitch={(index) => switchTabHandler(index)}
                            tabs={MY_PROFILE_TABS}
                            currentTab={selectedTab}
                        />
                    </CompanyMedia>}
                {selectedTab === 3 &&
                    <Password>
                        <TabsNavigator
                            onTabSwitch={(index) => switchTabHandler(index)}
                            tabs={MY_PROFILE_TABS}
                            currentTab={selectedTab}
                        />
                    </Password>}
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
    )
   
}

export default MyProfile;