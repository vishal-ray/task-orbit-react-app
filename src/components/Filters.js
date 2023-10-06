import React from "react";

export function FilterButton () {
    return(
        <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Filters
      </button>
    )
}
const Filters = () => {
  return (
    <>
      {/* Button trigger modal */}
      
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
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
                    {/* Sector */}
                    <div className="mb-3">
                      <label className="form-label">Sector</label>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="sector[]"
                          value="govt"
                        />
                        <label className="form-check-label">Govt</label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="sector[]"
                          value="private"
                        />
                        <label className="form-check-label">Private</label>
                      </div>
                    </div>

                    {/* Mode of Working */}
                    <div className="mb-3">
                      <label className="form-label">Mode of Working</label>
                      <div className="form-check">
                        <input
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
                          type="checkbox"
                          className="form-check-input"
                          name="mode_of_working[]"
                          value="office"
                        />
                        <label className="form-check-label">Office</label>
                      </div>
                      <div className="form-check">
                        <input
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
                    {/* Location */}
                    <div className="mb-4">
                      <label className="form-label">Location</label>
                      <select
                        className="form-select"
                        name="location"
                        id="location"
                      >
                        <option value="india">India</option>
                        <option value="remote">Remote</option>
                      </select>
                    </div>

                    {/* Job Type */}
                    <div className="mb-3">
                      <label className="form-label">Job Type</label>
                      <div className="form-check">
                        <input
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
                          type="checkbox"
                          className="form-check-input"
                          name="job_type[]"
                          value="internship"
                        />
                        <label className="form-check-label">Internship</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Filters */}
                <div className="mb-3">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="job_title"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Salary Range</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="salary_range[min]"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      className="form-control"
                      name="salary_range[max]"
                      placeholder="Max"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Skills</label>
                  <input type="text" className="form-control" name="skills" />
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
