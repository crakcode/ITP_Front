import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/review";


export const getCompanyId = (companyName) =>{
  return axios.get(USER_API_BASE_URL+"/"+companyName);
}

export const createReview = (CompanyId,ucode,review) =>
  axios.post(USER_API_BASE_URL+'/'+CompanyId+'/'+ucode,review)

export const createMyCompanyList = (ucode,name) =>
  axios.post(USER_API_BASE_URL+'/'+ucode+'/'+name)


export const getReviewByCompanyId = (CompanyId) =>
  axios.post(USER_API_BASE_URL+ '/' + CompanyId);

export const getMyCompanyList = (ucode) =>
  axios.get(USER_API_BASE_URL+ '/company/' + ucode);

export const deleteUser = (params) =>
  axios.delete(USER_API_BASE_URL+ '/' + params.email);

export const login = (params) =>
  axios.post(USER_API_BASE_URL+"/login",params)



