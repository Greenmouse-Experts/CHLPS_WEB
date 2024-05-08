import axios from "axios";
import * as ENDPOINT from "../constant.tsx";

export const getCertification = async () => {
    return axios
      .get(`${ENDPOINT.GET_CERTIFICATION}`)
      .then((response) => response.data);
  };
  
  export const getMyCertificate = async () => {
    return axios
      .get(`${ENDPOINT.GET_USER_CERTIFICATION}`)
      .then((response) => response.data);
  };