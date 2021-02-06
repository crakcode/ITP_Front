import axios from 'axios';

const ACCOUNT_API_BASE_URL="http://localhost:8080/api/v1/community";


class AccountService{

    createAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL+"/create",account);
    }

    helloworld(params){
        return axios.post(ACCOUNT_API_BASE_URL,params);
    }


}
export default new AccountService()
