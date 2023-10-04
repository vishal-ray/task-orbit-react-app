import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/user";

class UserService{
    getProfile(email,config){
        return axios.get(BASE_URL +"/profile", email, config);
    }
}

export default new UserService();