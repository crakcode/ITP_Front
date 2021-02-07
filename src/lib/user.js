import axios from 'axios';

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/v1/user";


export const getUsers = () =>{
  return axios.get(COMMUNITY_API_BASE_URL+"/list");
}

export const createUser = (params) =>
  axios.post(COMMUNITY_API_BASE_URL,params)


export const getUserById = (params) =>
  axios.get(COMMUNITY_API_BASE_URL+ '/' + params.bcode);


export const deleteUser = (params) =>
  axios.delete(COMMUNITY_API_BASE_URL+ '/' + params.email);

export const login = (params) =>
  axios.post(COMMUNITY_API_BASE_URL+"/login",params)

