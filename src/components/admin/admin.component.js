import React, { Component } from "react";
import AdminDataService from "./admin.service";

export default class Admin extends Component {
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.getAdmin = this.getAdmin.bind(this);
        this.updateApprove = this.updateApprove.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
        this.deleteAdmin  = this.deleteAdmin.bind(this);

        this.state ={
            currentAdmin: {
                id: null,
                name: "",
                address: "",
                approve: false
            },
            message: ""
        };
    }

    componentDidMount(){
       
        this.getAdmin$(this.props.match.params.id);
    }

    onChangeName(e){
        const name =e.target.value;

        this.setState(function(prevState){
            return{
                currentAdmin: {
                 ...prevState.currentAdmin,
                 name: name
                }
            };
        });
    }
    onChangeAddress(e){
        const address =e.target.value;

        this.setState(prevState => ({
            
                currentAdmin: {
                 ...prevState.currentAdmin,
                 address: address
                }
            }));   
}

getAdmin(id) {
    AdminDataService.get(id)
    .then(response =>{
        this.setState({
            currentAdmin: response.data
        });
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
}

updateApprove(status){
    var data ={
        id: this.state.currentAdmin.id,
        name: this.state.currentAdmin.name,
        address: this.state.currentAdmin.address,
        approve: status
    };

    AdminDataService.update(this.state.currentAdmin.id, data)
    .then(response =>{
        this.setState(prevState =>({
            currentAdmin:{
                ...prevState.currentAdmin,
                approve: status
            }
        }));
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
}
updateAdmin() {
    AdminDataService.update(
        this.state.currentAdmin.id,
        this.state.currentAdmin
    )
    .then(response =>{
        console.log(response.data);
    this.setState({
        message: "The Vendor was updated successfully!"
    });
    })
    .catch(e => {
        console.log(e);
    });
}

deleteAdmin(){
    AdminDataService.delete(this.state.currentAdmin.id)
    .then(response =>{
        console.log(response.data);
        this.props.history.push('/admins')
    })
    .catch(e =>{
        console.log(e);
    });
}
 render(){
     const { currentAdmin }=this.state;

     return(
         <div>
             {currentAdmin ? (
                 <div className="edit-form">
                <h4>Vendor Detail's</h4>
                <form>
                    <div className="from-group">
                        <label htmlFor="name">Vendor Name</label>
                        <input type="text"
                        className ="form-control"
                        id="name"
                        value={currentAdmin.name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="from-group">
                        <label htmlFor="address">Vendor Address</label>
                        <input
                        type="text"
                        className="form-control"
                        id ="address"
                        value={currentAdmin.address}
                        onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="from-group">
                        <label>
                            <strong>Approval Status :</strong>
                        </label>
                        {currentAdmin.approve ? " Approve" : " pending"}
                    </div>
                </form>

                {currentAdmin.approve ? (
                    <button className ="badge badge-primary mr-2"
                    onClick={()=>this.updateApprove(false )}
                    >
                        Deny Vendor
                    </button>
                ):(
                    <button className ="badge badge-primary mr-2"
                    onClick={()=>this.updateApprove(true )}
                    >
                        Approve Vendor
                    </button>
                )}
    
                <button className="badge badge-danger mr-2" onClick={this.deleteAdmin}>Delete Vendor</button>
                    
                <button type="submit" className="badge badge-success" onClick={this.updateAdmin}>Update Vendor</button>
                    <p>{this.state.message}</p>
                </div>
                ):(
                    <div>
                        <br />
                        <p>Please click on a Admin...</p>
                    </div>
                )}
                </div>
     );
    }
}