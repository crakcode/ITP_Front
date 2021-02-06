import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import helloworld from './account/Helloworld';
import CreateAccount from './account/CreateAccount';
import ListView from './components/pages/community/ListView';
import ViewCommunity from './components/pages/community/ViewCommunity';
// import ListView from './components/pages/community/ListView';
// import Dashboard from './components/common/Layout';

function Routes() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          {/* <Route path = "/" exact component = {Dashboard}></Route> */}
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/helloworld" component = {helloworld}></Route>
                          <Route path = "/community/list" component = {ListView}></Route>
                          <Route path = "/community/view/:id" component = {ViewCommunity}></Route>
                          <Route path = "/createaccount/:id" component = {CreateAccount}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default Routes;
