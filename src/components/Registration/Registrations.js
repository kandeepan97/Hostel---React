import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegistrationss } from "../../actions/registrationActions";
import PropTypes from "prop-types";
import {Link, Redirect } from "react-router-dom";
import ApprovalCard from '../../common/ApprovalCard'
import { approveRegistration,rejectRegistration } from "../../actions/registrationActions";



class Registrations extends Component {
  componentDidMount(){
    this.props.getRegistrationss();
  }

  onApproveClick = (id) => {
    this.props.approveRegistration(id);
    window.location.reload(false);
  };

  onRejectClick = (id) => {
    this.props.rejectRegistration(id);
    window.location.reload(false);
  };

  render() {
    const { registrations } = this.props.registration;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
        <h1>Manage Registrations</h1>
        </div>
      <table class="ui compact celled definition table">
  <thead>
    <tr>
      <th>Reg Id</th>
      <th>Room Id</th>
      <th>Email</th>
      <th>Payment Date</th>
      <th>Distance</th>
      <th>Payment Id</th>
      <th>Manage Registrations</th>
    </tr>
  </thead>

   {registrations.map(registration => (

  <tbody>
    <tr>
      <td>{registration.registrationid}</td>
      <td>{registration.roomId}</td>
      <td>{registration.email}</td>
      <td>{registration.paymentDate}</td>
      <td>{registration.distance}</td>
      <td>{registration.paymentId}</td>
      <td><div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button" onClick={this.onApproveClick.bind(this, registration.registrationid)}>Approve</div>
        <div class="ui basic red button" onClick={this.onRejectClick.bind(this, registration.registrationid)}>Decline</div>
      </div>
    </div>
    </td>
    </tr>
   </tbody> 
    
            ))  
}
</table>
</div>
    );
  }
}
  
    
  Registrations.propTypes = {
    registration: PropTypes.object.isRequired,
    getRegistrationss: PropTypes.func.isRequired,
    approveRegistration: PropTypes.func.isRequired

  };
  
  const mapStateToProps = state => ({
    registration: state.registration
  });
  
  export default connect(
    mapStateToProps,
    {getRegistrationss,approveRegistration,rejectRegistration}
    ) (Registrations);
  