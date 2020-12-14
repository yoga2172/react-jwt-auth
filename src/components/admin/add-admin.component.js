import React, { Component }from "react";
import AdminDataService from "./admin.service";

export default class AddAdmin extends Component {
constructor(props){
    super(props);
    this.onChangeAdmin =this.onChangeAdmin.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this);
    this.saveAdmin =this.saveAdmin.bind(this);
    this.newAdmin = this.newAdmin.bind(this);

    this.state ={
        id: null,
        name: "",
        address: "",
        Approve : false,

        submitted: false
    };
}
onChangeAdmin(e){
    this.setState({
        name: e.target.value
    });
}
onChangeAddress(e){
    this.setState({
        address: e.target.value
    });
}
saveAdmin(){
    var data ={
        name:this.state.name,
        address: this.state.address
    };

    AdminDataService.create(data)
    .then(response =>{
        this.setState({
            id: response.data.id,
            name: response.data.name,
            address: response.data.address,
            Approve: response.data.Approve,

            submitted: true
        });
        console.log(response.data);
    })
    .catch(e =>{
        console.log(e);
    });
}
newAdmin(){
    this.setState({
        id: null,
        name: "",
        address: "",
        Approve: false,

        submitted: false
    })
}

render() {
    return(
        <div className="submit-form">
            {this.state.submitted ?(
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={this.newAdmin}>
                        Add Vendor
                    </button>
                </div>

            ):(
                <div>
                    <div className="form-group">
                        <label htmlFor="admin">Vendor Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                       
                        value={this.state.admin}
                        onChange={this.onChangeAdmin}
                        name="name"  required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Vendor Address</label>
                        <input
                        type="text"
                        className="form-control"
                        id="address"
                        
                        value={this.state.address}
                        onChange={this.onChangeAddress}
                        name="address"
                        required
                        ></input>
                    </div>

                    <button onClick={this.saveAdmin}className="btn btn-success">
                        Submit
                    </button>
                    </div>
                    

            )}
        </div>
        
    );
}
}