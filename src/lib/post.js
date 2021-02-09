import axios from 'axios';

const POST_API_BASE_URL = "http://localhost:8080/api/v1/postboard";


export const getPostList = () =>{
  return axios.get(POST_API_BASE_URL+"/list");
}

//Request Body 및 ucode 필요
export const CreatePost = (ucode) =>{
  return axios.post(POST_API_BASE_URL+'/'+ucode)
}

export const getPostById = (id) =>
  axios.get(POST_API_BASE_URL+ '/' + id);

export const updatePost = (id) =>
  axios.put(POST_API_BASE_URL+'/'+ id);

export const updateCommunity = (params) =>
  axios.put(POST_API_BASE_URL + '/' + params.bcode, params);

export const deleteCommunity = (params) =>
  axios.delete(POST_API_BASE_URL + '/' +params.bcode);

