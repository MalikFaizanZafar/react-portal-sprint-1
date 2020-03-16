import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col } from "reactstrap";
import "../../employers.styles.css";
type ReportsInActiveJobsProps = {
  // tabs: new (props: any) => React.Component
  jobSelect: (id : number) => void
};
const ReportsInActiveJobs: FunctionComponent<ReportsInActiveJobsProps> = ({jobSelect, children }) => {
  const [unprocessedJobs] = useState([
    {
      title: "Job # 1",
      postedDate: "01-01-2001",
      expiryDate: "01-01-2001",
      views: "SHORTLIST",
      applications: "Rejected"
    },
    {
      title: "Job # 1",
      postedDate: "01-01-2001",
      expiryDate: "01-01-2001",
      views: "SHORTLIST",
      applications: "Rejected"
    },
    {
      title: "Job # 1",
      postedDate: "01-01-2001",
      expiryDate: "01-01-2001",
      views: "SHORTLIST",
      applications: "Rejected"
    }
  ]);

  const jobClickHandler = (job: any) => {
    jobSelect(job.id)
  }
  return (
    <Container className="p-0">
      {children}
      <div className="" style={{ width: '100%',overflow: 'auto'}}>
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="active-job-unprocessed-table-thead bg-primary text-white mt-3 py-2">
              <tr>
                <th className="py-4">Title</th>
                <th className="py-4">Posted Date</th>
                <th className="py-4">Expiry Date</th>
                <th className="py-4">Views</th>
                <th className="py-4">Applications</th>
              </tr>
            </thead>
            <tbody>
              {unprocessedJobs.map((job, i) => {
                return (
                  <tr key={i} onClick={(job) => jobClickHandler(job)}>
                    <td className="py-4 ">{job.title}</td>
                    <td className="py-4"> {job.postedDate}</td>
                    <td className="py-4 ">{job.expiryDate}</td>
                    <td className="py-4 ">{job.views}</td>
                    <td className="py-4 ">{job.applications}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </div>
    </Container>
  );
};

export default ReportsInActiveJobs;
