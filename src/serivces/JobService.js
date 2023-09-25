import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/jobs";

class JobService{
    getAllJobs(){
        return axios.get(BASE_URL);
    }
}

export default new JobService();