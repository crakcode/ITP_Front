import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8080/api/v1/company";


export const getCompanyList = () =>{
  return axios.get(COMPANY_API_BASE_URL+"/list");
}

export const getCompanyByDynamic = (params) =>{
  return axios.get(COMPANY_API_BASE_URL+"/search",params)
}

export const getCompanyByLocation = (location) =>
  axios.get(COMPANY_API_BASE_URL+ '/' + location);

export const getCompanyByName = (name) =>
  axios.get(COMPANY_API_BASE_URL+'/name/' + name);



export const updateCommunity = (params) =>
  axios.put(COMPANY_API_BASE_URL + '/' + params.bcode, params);

export const deleteCommunity = (params) =>
  axios.delete(COMPANY_API_BASE_URL + '/' +params.bcode);

