import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col } from "reactstrap";
import "../../employers.styles.css";
type ActiveJobsSubSectionProps = {
  // tabs: new (props: any) => React.Component
  jobSelect: (id : number) => void
};
const ActiveJobsSubSection: FunctionComponent<ActiveJobsSubSectionProps> = ({jobSelect, children }) => {
  const [unprocessedJobs] = useState([
    {
      id: 1,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    },
    {
      id: 2,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    },
    {
      id: 3,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    },
    {
      id: 4,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    },
    {
      id: 5,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    }
  ]);

  const jobClickHandler = (job: any) => {
    jobSelect(job.id)
  }
  return (
    <Container className="p-0">
      {children}
      <div className="" style={{ width: '100%',overflow: 'auto'}}>
           <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm"
           style={{width:'100%'}} >
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Extn.</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>5421</td>
                <td>t.nixon@datatables.net</td>
              </tr>
              <tr>
                <td>Garrett</td>
                <td>Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
                <td>8422</td>
                <td>g.winters@datatables.net</td>
              </tr>
              <tr>
                <td>Ashton</td>
                <td>Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
                <td>1562</td>
                <td>a.cox@datatables.net</td>
              </tr>
              <tr>
                <td>Cedric</td>
                <td>Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
                <td>6224</td>
                <td>c.kelly@datatables.net</td>
              </tr>
            </tbody>
          </table>
      </div>
    </Container>
  );
};

export default ActiveJobsSubSection;
