import React, { useEffect, useState } from "react";
import JobService from "../serivces/JobService";
import Filters, { FilterButton } from "./Filters";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/style.css"

function JobSection() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 10;

  const [selectedFilters, setSelectedFilters] = useState({
    sector: [],
    mode_of_working: [],
    location: "",
    job_type: [],
    search: "",
    salary_range: { min: "", max: "" }
  });

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;

    setSelectedFilters((prevState) => {
      const newSelectedFilters = { ...prevState };

      if (type === "checkbox") {
        if (!newSelectedFilters[name]) {
          newSelectedFilters[name] = [];
        }

        if (checked) {
          newSelectedFilters[name].push(value);
        } else {
          newSelectedFilters[name] = newSelectedFilters[name].filter(
            (item) => item !== value
          );
        }
      } else if (type === "select") {
        newSelectedFilters[name] = value;
      } else {
        newSelectedFilters[name] = value;
      }

      return newSelectedFilters;
    });
  };

  useEffect(() => {
    getAllJobs();
  }, [pageNumber]);

  const getAllJobs = () => {
    JobService.getAllJobs()
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        if(error.message == "Network Error")
          navigate("/network-error")
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

  const sendFiltersToBackend = () => {
    let {
      sector,
      mode_of_working,
      location,
      job_type,
      salary_range,
      search
    } = selectedFilters;

    sector = selectedFilters["sector[]"];
    mode_of_working = selectedFilters["mode_of_working[]"];
    location = selectedFilters["location"];
    job_type = selectedFilters["job_type[]"];
    search = selectedFilters["search"];
    let min = selectedFilters["salary_range[min]"];
    let max = selectedFilters["salary_range[max]"];
    

    console.log(
      sector,
      mode_of_working,
      location,
      search,
      min,
      max
    );
    let apiUrl = "http://127.0.0.1:8080/job/filter?";

    if (sector && sector.length > 0) {
      apiUrl += `sector=${sector.join(",")}&`;
    }

    if (mode_of_working && mode_of_working.length > 0) {
      apiUrl += `mode_of_working=${mode_of_working.join(",")}&`;
    }

    if (location) {
      apiUrl += `location=${location}&`;
    }

    if (job_type && job_type.length > 0) {
      apiUrl += `job_type=${job_type.join(",")}&`;
    }

    if (search) {
      apiUrl += `search=${search}&`;
    }

    if (min) {
      apiUrl += `min_salary=${min}&`;
    }

    if (max) {
      apiUrl += `max_salary=${max}&`;
    }

    if (apiUrl.endsWith("&")) {
      apiUrl = apiUrl.slice(0, -1);
    }

    console.log(apiUrl);

    axios
      .get(apiUrl)
      .then((response) => {
        const filteredJobs = response.data;
        console.log(filteredJobs);
        if(filteredJobs.data == null)
        {
          document.getElementById("filter-response").innerText = "We Couldn't find any matching jobs, anyway you can browse through the following jobs"
        }
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // // Use the selected filters to query the API for the asked data.
    // let filteredJobs = null;
    //  JobService.getJobByFilter(job_title,job_type,location,mode_of_working,salary_range.min,salary_range.max,sector,skills).then((response) =>{
    //   filteredJobs = response.data
    //   console.log(filteredJobs)
    //  })
    //  .catch((error) =>{
    //   console.log(error)
    //  })
    sendFiltersToBackend();

    // setJobs(filteredJobs)
  };

  return (
    <>
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className="d-flex justify-content-between align-items-center container">
        <div className="col-sm-9">
        
          <input
            type="text"
            onChange={(e) => handleFilterChange(e)}
            className="form-control mt-2 mb-2 me-2"
            style={{
              width: "98%",
              backgroundColor: "#ffffff",
              color: "#333333",
            }}
            placeholder="Search for Job title / Profile / Department"
            aria-label="Search"
            name="search"
          />    
        </div>

        <div className="col-sm-3">
          <>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Filters
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Select the Filters
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Sector</label>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="sector[]"
                                value="govt"
                              />
                              <label className="form-check-label">Govt</label>
                            </div>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="sector[]"
                                value="private"
                              />
                              <label className="form-check-label">
                                Private
                              </label>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label className="form-label">
                              Mode of Working
                            </label>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="mode_of_working[]"
                                value="work_from_home"
                              />
                              <label className="form-check-label">
                                Work from home
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="mode_of_working[]"
                                value="office"
                              />
                              <label className="form-check-label">Office</label>
                            </div>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="mode_of_working[]"
                                value="hybrid"
                              />
                              <label className="form-check-label">Hybrid</label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Location</label>
                            <select
                              className="form-select"
                              name="location"
                              id="location"
                              onChange={(e) => handleFilterChange(e)}
                            >
                              <option value="india">India</option>
                              <option value="remote">Remote</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Job Type</label>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="job_type[]"
                                value="full_time_permanent"
                              />
                              <label className="form-check-label">
                                Full time / permanent
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="job_type[]"
                                value="contract_temp"
                              />
                              <label className="form-check-label">
                                Contract / Temp
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                onChange={(e) => handleFilterChange(e)}
                                type="checkbox"
                                className="form-check-input"
                                name="job_type[]"
                                value="internship"
                              />
                              <label className="form-check-label">
                                Internship
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      
                      <div className="mb-3">
                        <label className="form-label">Salary Range</label>
                        <div className="input-group">
                          <input
                            onChange={(e) => handleFilterChange(e)}
                            type="number"
                            className="form-control"
                            name="salary_range[min]"
                            placeholder="Min : 10,000"
                            defaultValue={10000}
                            min={10000}
                          />
                          <input
                            onChange={(e) => handleFilterChange(e)}
                            type="number"
                            className="form-control"
                            name="salary_range[max]"
                            placeholder="Max : 1,50,000"
                            defaultValue={150000}
                            max={150000}
                          />
                        </div>
                      </div>
                      
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Filter
                      </button>
                    </div>
                  
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      </form>

            

            {/* Jobs Section */}

      <div style={{ backgroundColor: "#ffffff", marginTop: 20 }}>
        <div
          className="container"
          style={{
            padding: "0",
            backgroundColor: "#ffffff",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div id="filter-response"></div>
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
            <div className="card taskorbit-text" style={{ backgroundColor: "#ffffff", border: "none" }} key={job.id}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title fw-bold">{job.institute}</h5>
                <p className="card-text">
                  <b>
                    {job.title} | Pay: {job.payscale} | Location: {job.location} | Department: {job.department} | Vacancy: {job.vacancyNumber}
                  </b>
                </p>
                <p className="card-text">
                  Last Date: {job.lastDateToApply}
                  {"    "}
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
                <Link className="btn btn-outline-primary me-2" to={`/job/${job.id}`}>More Info</Link>
                <a className="btn btn-primary" href={job.applyLink} target="_blank">Apply Here</a>
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
