import axios from "axios";
import * as ENDPOINT from "../constant.tsx";

export const getTickets = async () => {
    return axios
      .get(`${ENDPOINT.GET_TICKETS}`)
      .then((response) => response.data);
  };

  export const getSingleTicket = async (id:string) => {
    return axios
      .get(`${ENDPOINT.GET_TICKETS}/${id}`)
      .then((response) => response.data);
  };
  
  export const createTicket = async (payload: any) => {
    return axios
      .post(`${ENDPOINT.CREATE_TICKET}`, payload)
      .then((response) => response.data);
  };

  export const updateTicket = async (payload: any) => {
    return axios
      .post(`${ENDPOINT.UPDATE_TICKET}`, payload)
      .then((response) => response.data);
  };

  export const deleteTicket = async () => {
    return axios
      .get(`${ENDPOINT.DELETE_TICKET}`)
      .then((response) => response.data);
  };