import axios from 'axios';

const COMMENT_API_BASE_URL = "http://localhost:8080/api/v1/post";


export const getComments = (id) =>{
  return axios.get(COMMENT_API_BASE_URL+"/comment/"+id);
}

export const createComment = (id,ucode,params) =>
  axios.post(COMMENT_API_BASE_URL+'/'+id+'/'+ucode+'/comment',params)

export const getUserById = (ucode) =>
  axios.post(COMMENT_API_BASE_URL+ '/' + ucode);


export const deleteUser = (params) =>
  axios.delete(COMMENT_API_BASE_URL+ '/' + params.email);

export const deleteCommmentById = (ucode,commentID) =>
  axios.delete(COMMENT_API_BASE_URL+ '/comment/' + ucode+'/'+commentID);

export const login = (params) =>
  axios.post(COMMENT_API_BASE_URL+"/login",params)



