import React,{useEffect,useState} from 'react'
import JobService from '../serivces/JobService';
import Sidebar from './Sidebar';
import {websiteThemeColor} from '/home/vishal_ray/task-orbit-react-app/src/GlobalVariables.js'
import Filters from './Filters';

function JobSection() {

  const [jobs,setJobs] = useState([])
  const [filters, setFilters] = useState({
    institute: '',
    title: '',
    state: '',
    department: '',
  });

  useEffect(() =>{
    getAllJobs();
  },[])


  const getAllJobs = () => {
    JobService.getAllJobs().then((response) =>{
      setJobs(response.data)
      console.log(response.data)
    }).catch(error =>{
      console.log(error);
    });
  }

  const handleFilterChange = (filtersState) => {
    setFilters(filtersState);
  };

    return (
    <>
    <Filters filters={filters} onFilterChange={handleFilterChange} />

    <div style={{backgroundColor: "White", marginTop:20}}>
         
     <div className="container" style={{padding:"0", backgroundColor: "White",  fontFamily: '"Nunito", sans-serif'}}>
     <div className="card" style={{backgroundColor: "White", border:0, color:`${websiteThemeColor}`}}>
     <div className="card-body d-flex justify-content-between align-items-center">
        <h3 className="taskorbit-text"style={{fontFamily: '"Nunito", sans-serif'}}><b>Latest Jobs</b></h3>
        </div>
     </div>
      {jobs.map((job) => (
        <div className="card taskorbit-text" style={{backgroundColor: "White", border:0}}key={job.id}>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title fw-bold">{job.institute}</h5>
              <p className="card-text">
                <b>{job.title} | Pay: {job.payscale} | State: {job.state} | Department: {job.department} | Vacancy: {job.vacancyNumber}</b>
              </p>
              <p className="card-text">
                Last Date: {job.lastDateToApply}{'        '}
                <a href={job.advertisementLink} target="_blank" rel="noopener noreferrer">
                  {" "}    Notification Link
                </a>
              </p>
            </div>
            {/* <button className="btn btn-primary taskorbit-text" href={job.applyLink}>Asadasd</button> */}
            <a className="btn btn-primary" href={job.applyLink} target='_blank'>Apply Here</a>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <nav aria-label="Page navigation example" style={{marginTop:15}}>
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">«</span>
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">»</span>
      </a>
    </li>
  </ul>
</nav>

    </div>
    </>
  );
};
export default JobSection;
