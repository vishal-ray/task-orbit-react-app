import React,{useState, useEffect} from 'react';


const Filters = () => {


  let [instituteFilter, setInstituteFilter] = useState('');
  let [titleFilter, setTitleFilter] = useState('');
  let [stateFilter, setStateFilter] = useState('');
  let [departmentFilter, setDepartmentFilter] = useState('');

instituteFilter = [
  { id: 1, name: 'University of Delhi' },
  { id: 2, name: 'Indian Institute of Technology Bombay' },
  { id: 3, name: 'Jawaharlal Nehru University' },
  { id: 4, name: 'Anna University' },
  { id: 5, name: 'University of Mumbai' },
  { id: 6, name: 'Indian Institute of Technology Delhi' },
  { id: 7, name: 'University of Madras' },
  { id: 8, name: 'Indian Institute of Technology Kanpur' },
  { id: 9, name: 'University of Calcutta' },
  { id: 10, name: 'Indian Institute of Technology Kharagpur' },
  { id: 11, name: 'University of Pune' },
  { id: 12, name: 'Indian Institute of Technology Madras' },
  { id: 13, name: 'University of Hyderabad' },
  { id: 14, name: 'Indian Institute of Technology Roorkee' },
  { id: 15, name: 'Banaras Hindu University' },
  { id: 16, name: 'Indian Institute of Technology Guwahati' },
  { id: 17, name: 'University of Rajasthan' },
  { id: 18, name: 'Indian Institute of Technology Hyderabad' },
  { id: 19, name: 'University of Lucknow' },
  { id: 20, name: 'Indian Institute of Technology Bhubaneswar' },
];

titleFilter = [
    { id: 1, name: 'Assistant Professor' },
    { id: 2, name: 'Associate Professor' },
    { id: 3, name: 'Professor' },
    { id: 4, name: 'Lecturer' },
    { id: 5, name: 'Dean' },
    { id: 6, name: 'Head of Department' },
    { id: 7, name: 'Research Associate' },
    { id: 8, name: 'Postdoctoral Fellow' },
    { id: 9, name: 'Adjunct Professor' },
    { id: 10, name: 'Graduate Assistant' },
    { id: 11, name: 'Teaching Assistant' },
    { id: 12, name: 'Visiting Professor' },
    { id: 13, name: 'Instructor' },
    { id: 14, name: 'Librarian' },
    { id: 15, name: 'Registrar' },
    { id: 16, name: 'Provost' },
    { id: 17, name: 'Chancellor' },
    { id: 18, name: 'Vice Chancellor' },
    { id: 19, name: 'Academic Advisor' },
    { id: 20, name: 'Research Scientist' },
  ];
  
  
stateFilter = [
    { id: 1, name: 'Andaman and Nicobar Islands' },
    { id: 2, name: 'Andhra Pradesh' },
    { id: 3, name: 'Arunachal Pradesh' },
    { id: 4, name: 'Assam' },
    { id: 5, name: 'Bihar' },
    { id: 6, name: 'Chandigarh' },
    { id: 7, name: 'Chhattisgarh' },
    { id: 8, name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { id: 9, name: 'Delhi' },
    { id: 10, name: 'Goa' },
    { id: 11, name: 'Gujarat' },
    { id: 12, name: 'Haryana' },
    { id: 13, name: 'Himachal Pradesh' },
    { id: 14, name: 'Jammu and Kashmir' },
    { id: 15, name: 'Jharkhand' },
    { id: 16, name: 'Karnataka' },
    { id: 17, name: 'Kerala' },
    { id: 18, name: 'Ladakh' },
    { id: 19, name: 'Lakshadweep' },
    { id: 20, name: 'Madhya Pradesh' },
    { id: 21, name: 'Maharashtra' },
    { id: 22, name: 'Manipur' },
    { id: 23, name: 'Meghalaya' },
    { id: 24, name: 'Mizoram' },
    { id: 25, name: 'Nagaland' },
    { id: 26, name: 'Odisha' },
    { id: 27, name: 'Puducherry' },
    { id: 28, name: 'Punjab' },
    { id: 29, name: 'Rajasthan' },
    { id: 30, name: 'Sikkim' },
    { id: 31, name: 'Tamil Nadu' },
    { id: 32, name: 'Telangana' },
    { id: 33, name: 'Tripura' },
    { id: 34, name: 'Uttar Pradesh' },
    { id: 35, name: 'Uttarakhand' },
    { id: 36, name: 'West Bengal' },
  ];
  
  departmentFilter = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Mathematics' },
    { id: 3, name: 'Computer Science' },
    { id: 4, name: 'Physics' },
    { id: 5, name: 'Chemistry' },
    { id: 6, name: 'Biology' },
    { id: 7, name: 'History' },
    { id: 8, name: 'Psychology' },
    { id: 9, name: 'Economics' },
    { id: 10, name: 'Business Administration' },
    { id: 11, name: 'Political Science' },
    { id: 12, name: 'Sociology' },
    { id: 13, name: 'Engineering' },
    { id: 14, name: 'Medicine' },
    { id: 15, name: 'Education' },
    { id: 16, name: 'Fine Arts' },
    { id: 17, name: 'Law' },
    { id: 18, name: 'Philosophy' },
    { id: 19, name: 'Languages and Linguistics' },
    { id: 20, name: 'Geology' },
  ];
  
  
//   useEffect(() => {
//     fetch('https://your-api-url/institutes')
//       .then(response => response.json())
//       .then(data => setInstituteFilter(data));

//     fetch('https://your-api-url/titles')
//       .then(response => response.json())
//       .then(data => setTitleFilter(data));

//     fetch('https://your-api-url/states')
//       .then(response => response.json())
//       .then(data => setStateFilter(data));

//     fetch('https://your-api-url/departments')
//       .then(response => response.json())
//       .then(data => setDepartmentFilter(data));
//   }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === 'institute') {
      setInstituteFilter(value);
    } else if (name === 'title') {
      setTitleFilter(value);
    } else if (name === 'state') {
      setStateFilter(value);
    } else if (name === 'department') {
      setDepartmentFilter(value);
    }
  };

 
  const filters = {
    institute: instituteFilter,
    title: titleFilter,
    state: stateFilter,
    department: departmentFilter,
  };

    return (
        <div className="container job-section mt-3">
        <div className="filters">
          <form class="row g-3">
  <div class="col">
    <label for="institute">Institute</label>
    <select name="institute" id="institute" onChange={handleFilterChange} class="form-select">
      {instituteFilter.map((institute) => (
        <option key={institute.id} value={institute.id}>
          {institute.name}
        </option>
      ))}
    </select>
  </div>
  <div class="col">
    <label for="title">Job Title</label>
    <select name="title" id="title" onChange={handleFilterChange} class="form-select">
      {titleFilter.map((title) => (
        <option key={title.id} value={title.id}>
          {title.name}
        </option>
      ))}
    </select>
  </div>
  <div class="col">
    <label for="state">State</label>
    <select name="state" id="state" onChange={handleFilterChange} class="form-select">
      {stateFilter.map((state) => (
        <option key={state.id} value={state.id}>
          {state.name}
        </option>
      ))}
    </select>
  </div>
  <div class="col">
    <label for="department">Department</label>
    <select name="department" id="department" onChange={handleFilterChange} class="form-select">
      {departmentFilter.map((department) => (
        <option key={department.id} value={department.id}>
          {department.name}
        </option>
      ))}
    </select>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" style={{float:"right"}}>Filter</button>
  </div>
</form>

        </div>
    </div>
  );
};

export default Filters;
