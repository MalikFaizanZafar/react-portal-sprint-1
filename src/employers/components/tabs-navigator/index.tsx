import React, { useState } from 'react';
import '../../employers.styles.css';

type TabsProps = {
    tabs: string[],
    currentTab: number,
    onTabSwitch: (index: number) => void
}
const TabsNavigator = ({tabs,currentTab, onTabSwitch}: TabsProps) => {

    const [selectedTab, setSelectedTab] = useState(currentTab);
    const headerClickHanlder = (index: number) => {
        setSelectedTab(index);
        onTabSwitch(index);
    }
    return (
        <React.Fragment>
            <div className="d-flex p-0 justify-content-center w-100">
                {
                    tabs.map((tab, i) => {
                        return(
                            <span key={i} onClick={(event) => headerClickHanlder(i)} style={{cursor: "pointer", width: `${tabs.length === 2? '50%': tabs.length === 3? '33.33%': tabs.length === 4? '25%': '100%'}`}} className={selectedTab !== i ?` non-active-tab`: 'active-tab text-primary  '}>{tab}</span>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default TabsNavigator;