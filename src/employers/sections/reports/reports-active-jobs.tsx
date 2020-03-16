import React, { FunctionComponent, useState } from "react";
import { Container, Table, Row, Col } from "reactstrap";
import "../../employers.styles.css";
type ReportsActiveJobsProps = {
  // tabs: new (props: any) => React.Component
  jobSelect: (id : number) => void
};
const ReportsActiveJobs: FunctionComponent<ReportsActiveJobsProps> = ({jobSelect, children }) => {
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
      <div className="" style={{ width: "100%", overflow: "auto" }}>
        <Col md="12" xs="12" sm="12">
          <Table hover className="mt-5 active-job-unprocessed-table">
            <thead className="active-job-unprocessed-table-thead bg-primary text-white mt-3 py-2">
              <tr>
                <th className="">Title</th>
                <th className="">Posted Date</th>
                <th className="">Expiry Date</th>
                <th className="">Views</th>
                <th className="">Applications</th>
              </tr>
            </thead>
            <tbody>
              {unprocessedJobs.map((job, i) => {
                return (
                  <tr key={i} onClick={(job) => jobClickHandler(job)}>
                    <td className=" ">{job.title}</td>
                    <td className=""> {job.postedDate}</td>
                    <td className=" ">{job.expiryDate}</td>
                    <td className=" ">{job.views}</td>
                    <td className=" ">{job.applications}</td>
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

export default ReportsActiveJobs;
