import React, { Component } from "react";
import AdminDataService from "./admin.service";
import { Link } from "react-router-dom";

export default class AdminsList extends Component {
    constructor(props){
        super(props);
        this.onChangeSearchName =this.onChangeSearchName.bind(this);
        this.retrieveAdmins = this.retrieveAdmins.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveAdmin =this.setActiveAdmin.bind(this);
        this.removeAllAdmins =this.removeAllAdmins.bind(this);
        this.searchName =this.searchName.bind(this);

        this.state ={
            admins: [],
            currentAdmin: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount(){
        this.retrieveAdmins();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName : searchName
        });
    }

    retrieveAdmins(){
        AdminDataService.getAll()
        .then(response =>{this.setState({admins: response.data});
            console.log(response.data);
        })
        .catch(e => {console.log(e);});
    }

    refreshList(){
        this.retrieveAdmins();
        this.setState({
            currentAdmin: null,
            currentIndex: -1
        });
    }

    setActiveAdmin(admin, index){
        this.setState({
            currentAdmin: admin,
            currentIndex: index
        });
    }

    removeAllAdmins() {
        AdminDataService.deleteAll()
        .then(response => {
            console.log(response.data);
            this.refreshList();
        })
        .catch(e => {
            console.log(e);
        });
    }

    searchName(){
        AdminDataService.findByName(this.state.searchName)
        .then(response=>{
            this.setState({
                admins: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render(){
        const {searchName, admins, currentAdmin ,currentIndex} = this.state;

        return(
     <div className="list row">
        <div className="col-md-8">
            <div className="input-group mb-3">
            <input type="text" className="form-control"  placeholder="Search by Vendor Name" value={searchName} onChange={this.onChangeSearchName}/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.searchName}>Search</button>
            </div>
            </div>
        </div>
        <div className="col-md-6">
            <h4>List of Vendor </h4>
            <ul className="list-group">{admins && admins.map((admin, index)=> (
                <li className={"list-group-item " +(index === currentIndex ? "activate" : "")} onClick = {() =>this.setActiveAdmin(admin, index)} key={index}>
                   {admin.name}
                </li>))}
            </ul>
            <button className="m-3 btn btn-sm btn-danger" onClick={this.removeAllAdmins}>Remove All Vendor's</button>
        </div>
        <div  className="col-md-6">{currentAdmin ? (
            <div>
                <h4>Vendor Details</h4>
                <div>
                    <label> <strong>Vendor Name:</strong></label>{" "}
                    {currentAdmin.name} 
                </div> 
                <div>
                <label><strong>Vendor Address:</strong></label>{" "}
                    {currentAdmin.address}
                </div> 
                <div>
                <label><strong>Approval Status:</strong></label>{" "}
                        {currentAdmin.approve ? "Approve" : "Pending"}
                </div>
                <Link to={"/admins/"+ currentAdmin.id} className="badge badge-warning">Edit Vendor Detail's</Link>
            </div>
            ): (
            <div>
            <br />
            <p>Please Select a Vendor From List...</p>
            </div>
        )}
        </div>
     </div>
     );
    }
}
