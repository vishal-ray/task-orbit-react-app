import React,{useEffect,useState} from 'react'
import JobService from '../serivces/JobService';
import Sidebar from './Sidebar';

function JobSection() {

  const [jobs,setJobs] = useState([])

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

  // const jobs = [
  //   {
  //     title: "Professor",
  //     institute: "Delhi University",
  //     payscale: "50000/month",
  //     state: "Delhi",
  //     department: "English",
  //     lastDateToApply : "05/11/2023",
  //     vacancyNumber : 12,
  //     applyLink: "https://www.google.com/",
  //     advertisementLink: "xyz.com"
  //   },
  //   {
  //       title: "Professor",
  //       institute: "Delhi University",
  //       payscale: "50000/month",
  //       state: "Delhi",
  //       department: "English",
  //       lastDateToApply : "05/11/2023",
  //       vacancyNumber : 12,
  //       applyLink: "https://www.google.com/",
  //       advertisementLink: "xyz.com"
  //   },
  //   {
  //       title: "Professor",
  //       institute: "Delhi University",
  //       payscale: "50000/month",
  //       state: "Delhi",
  //       department: "English",
  //       lastDateToApply : "05/11/2023",
  //       vacancyNumber : 12,
  //       applyLink: "https://www.google.com/",
  //       advertisementLink: "xyz.com"
  //   },
  // ];

  return (
    <>
    
    <div style={{backgroundColor: "White", marginTop:75, marginBottom:150}}>
    {/* <Sidebar/> */}
{/* style={{fontFamily: '"Nunito", sans-serif'}} */}
      <h3 style={{textAlign:"center" , fontFamily: '"Nunito", sans-serif', color:"#2A679C"}}><b>Latest Jobs</b></h3>
     <div className="container" style={{padding:"0", backgroundColor: "White",  fontFamily: '"Nunito", sans-serif'}}>
      {jobs.map((job) => (
        <div className="card" style={{backgroundColor: "White", border:0, color:"#2A679C"}}key={job.id}>
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
            <button className="btn btn-primary" style={{backgroundColor:"#2A679C"}}>Apply Here</button>
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
