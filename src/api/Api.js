import axios from "axios";

const Api = axios.create({
  baseURL: "http://192.168.1.106:3000/api",
  
});

export default Api;