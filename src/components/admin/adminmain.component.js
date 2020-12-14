import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AddAdmin from "./add-admin.component";
import Admin from "./admin.component";
import AdminsList from "./admins-list.component";

class AdminMain extends Component {
  render(){
    return (
      <Router>
      <div>
      <nav className="navbar navbar-expand-lg">
      
      <div className="form-inline">
      <ul className="nav-items">
      <Link to={"/admins"} className="btn btn-outline-info ">Vendor's List</Link>
      </ul>
      <ul className="nav-items">
      <Link to={"/addadmins"} className="btn btn-outline-info">Add Vendor</Link>
      </ul>
      </div>
      </nav>
      <div >
      <Switch>
      <Route exact path={["/", "/admins"]} component={AdminsList} />
      <Route exact path="/addadmins" component={AddAdmin} />
      <Route path="/admins/:id" component={Admin} />
      </Switch>
      </div>
      </div>
      <div class="d-flex flex-column min-vh-100">
    <nav>
    </nav>
    {/* <main class="flex-fill">
    </main>     */}
</div>
      </Router>
      );

    }
    
  }


export default AdminMain;
