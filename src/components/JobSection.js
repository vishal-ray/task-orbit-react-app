import React, { useEffect, useState } from "react";
import JobService from "../serivces/JobService";
import Filters, { FilterButton } from "./Filters";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";

function JobSection() {
  const [jobs, setJobs] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 10; // Number of jobs per page

  useEffect(() => {
    getAllJobs();
  }, [pageNumber]);

  const getAllJobs = () => {
    JobService.getAllJobs()
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pageCount = Math.ceil(jobs.length / jobsPerPage);
  const displayedJobs = jobs.slice(
    pageNumber * jobsPerPage,
    (pageNumber + 1) * jobsPerPage
  );

  const handlePageClick = (selectedPage) => {
    setPageNumber(selectedPage);
  };

  const [filtersOpen, setFiltersOpen] = React.useState(false);

  const handleOpenFilters = () => {
    setFiltersOpen(true);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center container">
        <div className="col-sm-9">
          <input
            type="search"
            className="form-control mt-2 mb-2 me-2"
            style={{
              width: "98%",
              backgroundColor: "#ffffff",
              color: "#333333",
            }}
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="col-sm-3">
          <FilterButton />
          <Filters />
        </div>
      </div>

      <div style={{ backgroundColor: "#ffffff", marginTop: 20 }}>
        <div
          className="container"
          style={{
            padding: "0",
            backgroundColor: "#ffffff",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            className="card"
            style={{
              backgroundColor: "#ffffff",
              border: "none",
              color: "#007BFF",
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <h3
                className="taskorbit-text"
                style={{ fontFamily: "Arial, sans-serif", color: "#333333" }}
              >
                <b>Latest Jobs</b>
              </h3>
            </div>
          </div>
          {displayedJobs.map((job) => (
            <div
              className="card taskorbit-text"
              style={{ backgroundColor: "#ffffff", border: "none" }}
              key={job.id}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title fw-bold">{job.institute}</h5>
                  <p className="card-text">
                    <b>
                      {job.title} | Pay: {job.payscale} | State: {job.state} |
                      Department: {job.department} | Vacancy:{" "}
                      {job.vacancyNumber}
                    </b>
                  </p>
                  <p className="card-text">
                    Last Date: {job.lastDateToApply}
                    {"        "}
                    <a
                      href={job.advertisementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007BFF" }}
                    >
                      {" "}
                      Notification Link
                    </a>
                  </p>
                </div>
                <div>
                  <Link
                    className="btn btn-outline-primary me-2"
                    to={`/job/${job.id}`}
                    // target="_blank"
                  >
                    More Info
                  </Link>
                  <a
                    className="btn btn-primary"
                    href={job.applyLink}
                    target="_blank"
                  >
                    Apply Here
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          style={{ marginTop: 15, display: "flex", justifyContent: "center" }}
        >
          <Pagination>
            <Pagination.Prev
              onClick={() => {
                if (pageNumber > 0) {
                  handlePageClick(pageNumber - 1);
                }
              }}
            />
            {Array.from({ length: pageCount }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index === pageNumber}
                onClick={() => handlePageClick(index)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => {
                if (pageNumber < pageCount - 1) {
                  handlePageClick(pageNumber + 1);
                }
              }}
            />
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default JobSection;
