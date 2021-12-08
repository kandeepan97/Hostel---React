import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getWardenByEmail,updateWarden,updateWardenForMyProfile } from "../../actions/wardenActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {Button, ButtonToolbar} from "react-bootstrap";
import {Link} from "react-router-dom";

 class UpdateWarden extends Component {

    constructor(){
        super();

        this.state = {
            firstName: "",
            wardenid: "",
            mobileNumber: "",
            email:"",
            lastName:"",
            hostelId:"",
            password:""
      
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const{
            firstName,
            wardenid,
            mobileNumber,
            email,
            lastName,
            hostelId,
            password
        } = nextProps.warden;

       this.setState({
        firstName,
        wardenid,
        mobileNumber,
        email,
        lastName,
        hostelId,
        password

       });

    } 


     componentDidMount(){
        
         const { email } = this.props.match.params;
         this.props.getWardenByEmail(email);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();

         const updateWarden = {

            firstName: this.state.firstName,
            wardenid: this.state.wardenid,
            mobileNumber: this.state.mobileNumber,
            email:this.state.email,
            lastName:this.state.lastName,
            hostelId:this.state.hostelId,
            password:this.state.password
         };
         this.props.updateWardenForMyProfile(updateWarden,this.props.history);
     }
    render() {
        return (
            <div className="project">
            <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'10px'}}>
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">My Details</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg "
                             placeholder="Warden Id"
                             name="wardenid"
                             value={this.state.wardenid} 
                             onChange={this.onChange}
                             required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                            required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                             placeholder="Last Name"
                             name="lastname"
                             value={this.state.lastName}
                             onChange={this.onChange}
                             required/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Mobile Number"
                         name="mobileNumber"
                         value={this.state.mobileNumber}
                         onChange={this.onChange}
                         required/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                     placeholder="Email"
                     name="email"
                     value={this.state.email}
                     onChange={this.onChange}
                     required/>
                </div>
                
        
                        
        <div className="form-button-group">
        <ButtonToolbar>
            
            <Button
                bsSize="small"
               
                style={
                    {
                        
                        "width": "30%"
                    }}
                type="submit"
                onClick={() => {}}
            >
                Update
            </Button>
            
            <Link to = '/wardenDashboard'>
            <Button
                bsSize="small"
                style={{"width": "250%","backgroundColor": "#999","margin-left": "20px"}}
                type="button"
            >
                Cancel
            </Button>
            </Link>
        </ButtonToolbar>
    </div>
          </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

UpdateWarden.propTypes = {
    getWardenByEmail: PropTypes.func.isRequired,
    updateWarden:PropTypes.func.isRequired,
    warden: PropTypes.object.isRequired,
    updateWardenForMyProfile:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    warden: state.warden.warden
});

export default connect(
    mapStateToProps,
    {getWardenByEmail,updateWarden,updateWardenForMyProfile} 
    )(UpdateWarden);