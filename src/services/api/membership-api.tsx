import axios from "axios";
import * as ENDPOINT from "../constant.tsx";
import { BASE_URL } from "../constant.tsx";
import { getBearerToken, getToken } from "../helpers.tsx";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = getBearerToken();
axios.interceptors.request.use(
  function(config) {
    const token = getToken(); 
    if (token) {
      config.headers["Authorization"] = getBearerToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 40) {
        localStorage.clear()
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  }
);

export const getMembershipPlans = async () => {
  return axios
    .get(`${ENDPOINT.GET_MEMBERSHIP_PLANS}`)
    .then((response) => response.data);
};

export const applyForMembership = async () => {
  return axios
    .post(`${ENDPOINT.GET_MEMBERSHIP_PLANS}`)
    .then((response) => response.data);
};
