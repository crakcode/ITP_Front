import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import helloworld from './account/Helloworld';
import CreateAccount from './account/CreateAccount';
import Login from './components/pages/login/Login';
import Signup from './components/pages/user/Singup';
import CompanyView from './components/pages/company/CompanyView';
import Appshell from './components/common/Appshell';
import PostBoard from './components/pages/postboard/PostBoard';
import PostBoardView from './components/pages/postboard/PostBoardView';
import CommunityList from './components/pages/community/CommunityList';
import CommunityView from './components/pages/community/CommunityView';
import CompanyList from './components/pages/company/CompanyList';
import FlavorForm from './components/pages/company/CompanySearch';
import Paging from './components/pages/company/Paging';
import CompanySearchList from './components/pages/company/CompanySearchList';
import CompanySearch from './components/pages/company/CompanySearch';
import Dashboard from './components/pages/dashboard/Dashboard';
import MyList from './components/pages/mypage/MyList';
import Navigation from './components/pages/mypage/Navigation';
import Page from './components/pages/company/Page';

function Routes() {
  return (
    <div>
        <Router>
          <Appshell/>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/signup" exact component = {Signup}></Route>
                          <Route path = "/dashboard" exact component = {Dashboard}></Route>
                          <Route path = "/post" exact component = {PostBoard}></Route>
                          <Route path = "/post/:id" exact component = {PostBoardView}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/helloworld" component = {helloworld}></Route>
                          <Route path = "/community" exact component = {CommunityList}></Route>
                          <Route path = "/community/:id" exact component = {CommunityView}></Route>
                          <Route path = "/createaccount/:id" component = {CreateAccount}></Route>
                          <Route path = "/company" exact component = {CompanySearchList}></Route>
                          <Route path = "/company/:id" exact component = {CompanyView}></Route>
                          <Route path = "/companysearch" component = {CompanySearch}></Route>
                          <Route path = "/paging" component = {Paging}></Route>
                          {/* <Route path = "/newpaging" component = {NewPaging}></Route> */}
                          <Route path = "/mypage" component = {MyList}></Route> 
                          {/* <Route path = "/page" component = {Page}></Route>  */}
                          {/* <Route path = "/navigation" component = {Navigation}></Route>  */}
                    </Switch>
                </div>

        </Router>
    </div>
    
  );
}

export default Routes;
