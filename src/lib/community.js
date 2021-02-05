import axios from 'axios';

/**
 * Get Account Information by accountId
 * @param accountId
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getAccount = (accountId) =>{
  return axios.get(`http://localhost:8080/api/v1/ciom/${accountId}`);
}

/**
 * Get Account List
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getAccountList = () =>
axios.get(`/api/v1/account/list`);

/**
 * Create Account Information
 * @param formData
 */
export const addCommunity = (params) =>
  axios.post(`http://localhost:8080/api/v1/community`,params)

/**
 * Update Account Information by accountId
 * @param formData
 */
export const updateAccount = (formData) =>
axios.put(`/api/v1/account/${formData.accountId}`, {
    formData,
  });

/**
 * Delete Account Information by accountId
 * @param accountId
 */
export const deleteAccount = (accountId) =>
axios.delete(`/api/v1/account/${accountId}`);
