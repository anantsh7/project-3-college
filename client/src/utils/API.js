import axios from "axios";
const APIKEY = "t7Pnruh9yyXyaROBLUdMdAqTdvEAFrVVHDBIc5IK";
const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=" + APIKEY + "&school.name&school.name=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  logout: function() {
    return axios.get('/api/users/logout')
  },
  register: function(userInfo) {
    return axios.post("/api/users/register", userInfo)
  }
}