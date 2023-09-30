import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/jobs";

class JobService{
    getAllJobs(){
        return axios.get(BASE_URL);
    }
}

export default new JobService();