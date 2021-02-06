import axios from 'axios';

const COMMUNITY_API_BASE_URL = "http://localhost:8080/api/v1/community";


export const getCommunitys = () =>{
  return axios.get(COMMUNITY_API_BASE_URL+"/list");
}

export const createCommunity = (params) =>
  axios.post(COMMUNITY_API_BASE_URL,params)


export const getCommunityById = (params) =>
  axios.get(COMMUNITY_API_BASE_URL+ '/' + params.bcode);


export const deleteAccount = (accountId) =>
  axios.delete(`/api/v1/account/${accountId}`);
