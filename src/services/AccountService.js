import axios from 'axios';

const ACCOUNT_API_BASE_URL="http://localhost:8080/api/v1/account";


class AccountService{

    createAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL+"/create",account);
    }

    helloworld(){
        return axios.get(ACCOUNT_API_BASE_URL+"/helloworld");

    }


}
export default new AccountService()
