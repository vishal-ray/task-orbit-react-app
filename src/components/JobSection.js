import React,{useEffect,useState} from 'react'
import JobService from '../serivces/JobService';

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
    <div style={{backgroundColor: "#d1d9e3"}}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <h3 style={{textAlign:"center"}}><b>Latest Jobs</b></h3>
     <div className="container" style={{padding:"0", backgroundColor: "#d1d9e3"}}>
      {jobs.map((job) => (
        <div className="card" style={{border:"0px", backgroundColor: "#d1d9e3"}}key={job.id}>
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
            <button className="btn btn-secondary">Apply Here</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default JobSection;
