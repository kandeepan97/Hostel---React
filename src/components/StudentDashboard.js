import React, { Component } from "react";

import AddWardenButton from "./Warden/AddWardenButton";
import AddRoomButton from "./Room/AddRoomButton";
import ViewWardenButton from "./Warden/ViewWardenButton";
import ViewRoomButton from "./Room/ViewRoomButton";
import ViewStudentButton from "./Student/ViewStudentButton";
import AddHostelButton from "./Hostel/AddHostelButton";
import ViewHostelButton from "./Hostel/ViewHostelButton";
import ViewRegistrationButton from "./Registration/ViewSucessfulRegistrationButton";
import RegisterRoomButton from "./Registration/RegisterRoomButton";
import MyProfileButton from "./Student/MyProfileButton";
import ResetPasswordButton from "./ResetPassword/ResetPasswordButton";
import { getRegistrationsss } from "../actions/studentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {ReactComponent as Room} from '../assets/room.svg';
import {ReactComponent as Student} from '../assets/student1.svg';
import {ReactComponent as Hostel} from '../assets/hostal.svg';
import {ReactComponent as Warden} from '../assets/warden.svg';
import {ReactComponent as Register} from '../assets/register.svg';
import {ReactComponent as View} from '../assets/hostal.svg';
import {ReactComponent as ViewHostal} from '../assets/viewhostal.svg';
import {ReactComponent as WardenView} from '../assets/dfgdg.svg';

import {useDispatch} from 'react';
import { grey, orange } from "@material-ui/core/colors";



class studentDashboard extends Component {


  componentDidMount() {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if (reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload(false);
    } else {
      sessionStorage.removeItem('reloadCount');
    }
    const email = localStorage.getItem('email');
    console.log('test'+ email);
    this.props.getRegistrationsss(email);
  }

  componentWillUnmount() {
    // window.location.reload(false);
  }


  render() {
   
    const { students } = this.props.student;
    console.log(students);
    console.log(students.hostelId);

  
    return (
      <div className="wardens">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center"></h1>

              <div style={{
                // margin:'0 auto',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                  margin: '12px',

              }}>
              
              <div style={{
                boxShadow: ' 0px 12px 32px #383B470F',
                width: '262px',
                height: '246px',
                textAlign: 'center',
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                border: '0.24px solid #FFFFFF',
                borderRadius: '12px',
                opacity: '1',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',

              }}>
                <div style={{width:'75px',height:'75px' ,margin:'10px'}}> <Student/></div>

                <MyProfileButton/></div>

                
                
                
  
                  <ResetPasswordButton/>

                  
                  </div>


              {students ? <div>
                {students.status == "PENDING" ? <div  style={{marginTop:'60px', fontSize: '18px', padding: '15px', textAlign: 'center', backgroundColor: 'orange', borderRadius: '10px', color: "white",  }}> Your Request for Hostel {students.hostelid} Room Number {students.roomId} is Pending </div> : <div>{students.status == "ACCEPTED" ?  <div style={{marginTop:'60px', fontSize: '18px', padding: '15px', textAlign: 'center', backgroundColor: 'green', borderRadius: '10px', color: "white",  }}> You Successfully Registerd Hostel {students.room.hostel.hostelName} Room Number {students.roomId} </div> :<RegisterRoomButton/>}  </div>} </div>
                : <RegisterRoomButton/> }

                
              
            </div>
          </div>
        </div>
      </div>
    );
  }

}

studentDashboard.propTypes = {
  getRegistrationsss: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  {getRegistrationsss}
  ) (studentDashboard);;