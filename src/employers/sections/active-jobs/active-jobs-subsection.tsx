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
      <Row className="px-5">
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="active-job-unprocessed-table-thead mt-3 py-2">
              <tr>
                <th className="py-4">O</th>
                <th className="py-4">#</th>
                <th className="py-4">Name</th>
                <th className="py-4">Resume</th>
                <th className="py-4">Nationality</th>
                <th className="py-4">Date Applied</th>
                <th className="py-4">Action</th>
                <th className="py-4"></th>
              </tr>
            </thead>
            <tbody>
              {unprocessedJobs.map((job, i) => {
                return (
                  <tr key={i} onClick={(job) => jobClickHandler(job)}>
                    <td className="py-4 ">
                      <input type="radio"/>
                    </td>
                    <td className="py-4 ">{job.id}</td>
                    <td className="py-4"> {job.name}</td>
                    <td className="py-4 ">
                      <i className="fa fa-eye"></i>
                      {`  ${job.resume}`}
                    </td>
                    <td className="py-4 ">{job.nationality}</td>
                    <td className="py-4 ">{job.dateApplied}</td>
                    <td className="py-4 ">{job.action}</td>
                    <td className="py-4 ">{job.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ActiveJobsSubSection;
