import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import helloworld from './account/Helloworld';
import CreateAccount from './account/CreateAccount';
import ListView from './components/pages/community/ListView';
import ViewCommunity from './components/pages/community/ViewCommunity';
import Dashboard from './components/pages/postboard/PostBoard';
import Login from './components/pages/login/Login';
import Signup from './components/pages/user/Singup';
import CompanyView from './components/pages/company/CompanyView';
import DashboardView from './components/pages/postboard/PostBoardView';
import Appshell from './components/common/Appshell';
import PostBoard from './components/pages/postboard/PostBoard';
import PostBoardView from './components/pages/postboard/PostBoardView';
// import Layout from './components/common/Layout';
// import ListView from './components/pages/community/ListView';
// import Dashboard from './components/common/Layout';

function Routes() {
  return (
    <div>
        <Router>
          <Appshell/>

                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/signup" exact component = {Signup}></Route>
                          {/* <HeaderComponent /> */}
                          <Route path = "/post" exact component = {PostBoard}></Route>
                          <Route path = "/post/:id" exact component = {PostBoardView}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/helloworld" component = {helloworld}></Route>
                          <Route path = "/community" component = {ListView}></Route>
                          <Route path = "/community/view/:id" component = {ViewCommunity}></Route>
                          <Route path = "/createaccount/:id" component = {CreateAccount}></Route>
                          <Route path = "/company" component = {CompanyView}></Route>\
                    </Switch>
                </div>

        </Router>
    </div>
    
  );
}

export default Routes;
