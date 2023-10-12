import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import JobService from "../serivces/JobService";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const JobDescription = () => {
  const [job, setJob] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getJob(id);
  }, []);

  const getJob = (id) => {
    console.log(id);
    JobService.getJobById(id)
      .then((response) => {
        setJob(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        if(error.message == "Network Error")
        {
          navigate("/network-error")
          return;
        }
        console.log(error);
      });
  };
  return (
    <Container className="my-4">
      <Row>
        <Col lg={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <h4 className="fw-bold mb-4">Job Details</h4>
              <ListGroup variant="flush">
                <JobDetailRow label="Institute" value={job.institute} />
                <JobDetailRow label="Job Title" value={job.title} />
                <JobDetailRow label="Pay Scale" value={job.payscale} />
                <JobDetailRow label="Location" value={job.location} />
                <JobDetailRow label="Department" value={job.department} />
                <JobDetailRow
                  label="Vacancy Number"
                  value={job.vacancyNumber}
                />
                <JobDetailRow
                  label="Last Date to Apply"
                  value={job.lastDateToApply}
                />
                <a
                  href={job.applyLink}
                  target="_blank"
                  className="btn btn-outline-primary mb-2"
                >
                  Apply Here
                </a>
                <a
                  href={job.advertisementLink}
                  target="_blank"
                  className="btn btn-outline-primary"
                >
                  Notification Link
                </a>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow-lg">
            <Card.Body>
              <h4 className="fw-bold text-center mb-4">Minimum Criteria</h4>
              <ListGroup variant="flush">
                <JobDetailRow  value={job.minCriteria} />
                
              </ListGroup>
            </Card.Body>
          </Card>

          <AdditionalDetailCard title="Selection Procedure">
            <p>{job.selectionProcessSteps}</p>
          </AdditionalDetailCard>

          <AdditionalDetailCard title="Exam Dates">
            <p>{job.exam_dates}</p>
          </AdditionalDetailCard>

          <AdditionalDetailCard title="Syllabus">
            <p>{job.syllabus}</p>
          </AdditionalDetailCard>
        </Col>
      </Row>
    </Container>
  );
};

const JobDetailRow = ({ label, value }) => (
  <ListGroup.Item>
    <h6 className="fw-bold">{label}</h6>
    <p>{value}</p>
  </ListGroup.Item>
);

const AdditionalDetailCard = ({ title, children }) => (
  <Card className="mt-4 shadow-lg">
    <Card.Body>
      <h4 className="fw-bold text-center mb-4">{title}</h4>
      {children}
    </Card.Body>
  </Card>
);

export default JobDescription;
