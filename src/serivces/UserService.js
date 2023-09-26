import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/auth";

class UserService{
    createUser(user)
    {
        return axios.post(BASE_URL+"/sign-up",user);
    }
    signInUser(user)
    {
        return axios.post(BASE_URL+"/sign-in",user);
    }
}

export default new UserService();