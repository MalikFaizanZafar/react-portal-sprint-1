import React, { FunctionComponent, useState } from "react";
import {
  Container,
  Alert,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import "../../employers.styles.css";
type ActiveJobsSubSectionProps = {
  // tabs: new (props: any) => React.Component
  jobSelect: (id: number) => void;
};
const ActiveJobsSubSection: FunctionComponent<ActiveJobsSubSectionProps> = ({
  jobSelect,
  children
}) => {
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
    jobSelect(job.id);
  };
  return (
    <Container className="p-0">
      {children}
      <div className="" style={{ width: "100%", overflow: "auto" }}>
        <Row className="p-2 mt-5">
          <Col md="7" sm="6" xs="12" className="align-items-center">
            <InputGroup className="p-1">
              <Input placeholder="Jobs, Departments etc" />
              <InputGroupAddon addonType="append">
                <InputGroupText
                  style={{ width: "100px", height: "38px" }}
                  className="bg-primary text-white pl-4"
                >
                  Search
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col md="5" sm="6" xs="12">
            <p className="font-weight-bold text-secondary">
              Enter Keywords such as Job Title or Department/Function to find
              Specific Job Postings
            </p>
          </Col>
        </Row>
        <Row className="my-2 px-3">
          <Col md="6" sm="6" xs="12">
            <h6 className="font-weight-bold">No of Jobs Posted (40/80)</h6>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="12"
            className="d-flex justify-content-end pr-5 align-items-center"
          >
            <h6>Number of Jobs Per Page</h6>
            <select className="mx-2" name="" id="">
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </Col>
        </Row>
        <table className="table table-bordered  table-hover table-sm" style={{ width: "100%",overflow: "auto" }}>
          <thead className="active-job-unprocessed-table-thead mt-3 py-2">
            <tr>
              <th className="">O</th>
              <th className="">#</th>
              <th className="">Name</th>
              <th className="">Resume</th>
              <th className="">Nationality</th>
              <th className="">Date Applied</th>
              <th className="">Action</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {unprocessedJobs.map((job, i) => {
              return (
                <tr key={i} onClick={job => jobClickHandler(job)}>
                  <td className=" ">
                    <input type="radio" />
                  </td>
                  <td className=" ">{job.id}</td>
                  <td className=""> {job.name}</td>
                  <td className=" ">
                    <i className="fa fa-eye"></i>
                    {`  ${job.resume}`}
                  </td>
                  <td className=" ">{job.nationality}</td>
                  <td className=" ">{job.dateApplied}</td>
                  <td className=" ">{job.action}</td>
                  <td className=" ">{job.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ActiveJobsSubSection;
