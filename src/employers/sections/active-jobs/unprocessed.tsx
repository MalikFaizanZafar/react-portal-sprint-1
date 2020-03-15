import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col } from "reactstrap";
import "../../employers.styles.css";

type UnProcessedProps = {
  // tabs: new (props: any) => React.Component
};
const UnProcessed: FunctionComponent<UnProcessedProps> = ({ children }) => {
  const [unprocessedJobs, setunProcessedJobs] = useState([
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
      id: 1,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    },
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
      id: 1,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    },
    {
      id: 1,
      name: "Job # 1",
      resume: "Preivew",
      nationality: "xxxxxxxxxxxxx",
      dateApplied: "01-01-2001",
      action: "SHORTLIST",
      status: "Rejected"
    }
  ]);
  return (
    <Container>
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
                  <tr key={i}>
                    <td>o</td>
                    <td>{job.id}</td>
                    <td>{job.name}</td>
                    <td>{job.resume}</td>
                    <td>{job.nationality}</td>
                    <td>{job.dateApplied}</td>
                    <td>{job.action}</td>
                    <td>{job.status}</td>
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

export default UnProcessed;
