import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";


export const getUsers = () =>{
  return axios.get(USER_API_BASE_URL+"/list");
}

export const createUser = (params) =>
  axios.post(USER_API_BASE_URL,params)


export const getUserById = (ucode) =>
  axios.post(USER_API_BASE_URL+ '/' + ucode);


export const deleteUser = (params) =>
  axios.delete(USER_API_BASE_URL+ '/' + params.email);

export const login = (params) =>
  axios.post(USER_API_BASE_URL+"/login",params)



