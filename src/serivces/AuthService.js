import axios from "axios";

const BASE_URL = "http://127.0.0.1:8080/auth";

class AuthService{
  createUser(user) {
    return axios.post(BASE_URL + "/sign-up", user);
  }
  signInUser(user) {
    return axios.post(BASE_URL + "/sign-in", user);
  }
  
}

export default new AuthService();