import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './ListEmployeeComponent';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';

export default class Employee extends Component {
  render(){
  return (
    <div>
        <Router>
              
                <div className="container">
                    <Switch> 
                          
                          <Route path = "/employee" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                    </Switch>
                </div>
            
        </Router>
    </div>
    
  );
}
}


