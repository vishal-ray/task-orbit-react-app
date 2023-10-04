import React from 'react';
import { Card, Table, ListGroup } from 'react-bootstrap';


const JobDescription = ({ job }) => {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">
          <h3 className="taskorbit-text"><b>Job Details</b></h3>
        </div>
        <div className="card-body">
          <Table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row" className="taskorbit-text">Institute</th>
                <td>Institute Name</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Job Title</th>
                <td>Job Title</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Pay Scale</th>
                <td>payscale</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">State</th>
                <td>State</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Department</th>
                <td>Department</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Vacancy Number</th>
                <td>Vacancy Number</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Last Date to Apply</th>
                <td>Last Date to Apply</td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Notification Link</th>
                <td>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Notification Link
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row" className="taskorbit-text">Apply Link</th>
                <td>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Apply Link
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-header">
          <h3 className="taskorbit-text"><b>Minimum Criteria</b></h3>
        </div>
        <div className="card-body">
          <ListGroup>
            <ListGroup.Item >Experience: kvhvbmn</ListGroup.Item>
            <ListGroup.Item >Educational qualification: mnmnmnn,n,.n.,m,.m,.</ListGroup.Item>
            <ListGroup.Item >Age limit: vxbxsxbvx</ListGroup.Item>
            <ListGroup.Item >Nationality: dfdsc</ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-header">
          <h3 className="taskorbit-text"><b>Selection Procedure</b></h3>
        </div>
        <div className="card-body">
          <p>Selection Procedure</p>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-header">
          <h3 className="taskorbit-text"><b>Exam Dates</b></h3>
        </div>
        <div className="card-body">
          <p>Dates</p>
        </div>
      </div>

      <div className="card mt-2">
        <div className="card-header">
          <h3 className="taskorbit-text"><b>Syllabus</b></h3>
        </div>
        <div className="card-body">
          <p>Syllabus</p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
