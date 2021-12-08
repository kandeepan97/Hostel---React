import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { createHostel } from "../../actions/hostelActions";
import axios from "axios";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class AddHostel extends Component {
  constructor() {
    super();

    this.state = {
      hostelName: "",
      hostelid: "",
      numberOfRooms: "",
      hostelType:"",
      email:"",
      formErrors: {
        hostelid:"",
        hostelName: "",
        numberOfRooms: "",
        email: "",
        hostelType:"",
      }   

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "hostelName":
        formErrors.hostelName =
          value.length < 3 ? "Enter a Valid Hostel Name" : "";
        break;
      case "hostelid":
        formErrors.hostelid =
          value.length < 3 ? "Enter a Valid Hostel Id" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "numberOfRooms":
        formErrors.numberOfRooms =
          value.length < 1 ? "numberOfRooms is required" : "";
        break;
      case "hostelType":
          formErrors.hostelType =
            value.length < 3 ? "Enter a Valid Hostel type" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  onSubmit(e) {
    e.preventDefault();
    const newHostel = {
      hostelName: this.state.hostelName,
      hostelid: this.state.hostelid,
      numberOfRooms: this.state.numberOfRooms,
      hostelType:this.state.hostelType,
      email:this.state.email
    };
    this.props.createHostel(newHostel, this.props.history);
    console.log(newHostel);
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        {
          
        }

        <div className="project">
          <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Hostels </h5>
                <hr />
                <form onSubmit={this.onSubmit} no>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Hostel Id"
                      name="hostelid"
                      noValidate
                      value={this.state.hostelid}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.hostelid.length > 0 && (
                      <span className="errorMessage">{formErrors.hostelid}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Hostel Name"
                      name="hostelName"
                      noValidate
                      value={this.state.hostelName}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.hostelName.length > 0 && (
                      <span className="errorMessage">{formErrors.hostelName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="NumberOfRooms"
                      name="numberOfRooms"
                      noValidate
                      value={this.state.numberOfRooms}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.numberOfRooms.length > 0 && (
                      <span className="errorMessage">{formErrors.numberOfRooms}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                      className="form-control form-control-lg"
                      placeholder="Warden Email"
                      name="email"
                      noValidate
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  

                <div className="form-group" style={{ width:'500px'}}>
                <select name='hostelType' value={this.state.hostelType} onChange={this.onChange} className="form-control form-control-lg">
                <option value='0'>hostelType</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              {formErrors.hostelType.length > 0 && (
                <span className="errorMessage">{formErrors.hostelType}</span>
              )}
              
                </div>
                  
                

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddHostel.propTypes = {
  createHostel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {createHostel}
)(AddHostel);