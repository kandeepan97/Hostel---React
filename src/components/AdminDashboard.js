import React, { Component } from "react";

import AddWardenButton from "./Warden/AddWardenButton";
import AddRoomButton from "./Room/AddRoomButton";
import ViewWardenButton from "./Warden/ViewWardenButton";
import ViewRoomButton from "./Room/ViewRoomButton";
import ViewStudentButton from "./Student/ViewStudentButton";
import AddHostelButton from "./Hostel/AddHostelButton";
import ViewHostelButton from "./Hostel/ViewHostelButton";
import ViewRegistrationButton from "./Registration/ViewSucessfulRegistrationButton";
import MyProfileButton from "./Admin/MyProfileButton";
import ResetPasswordButton from "./ResetPassword/ResetPasswordButton";
import {ReactComponent as Room} from '../assets/room.svg';
import {ReactComponent as Student} from '../assets/student1.svg';
import {ReactComponent as Hostel} from '../assets/hostal.svg';
import {ReactComponent as Warden} from '../assets/warden.svg';
import {ReactComponent as Register} from '../assets/register.svg';
import {ReactComponent as View} from '../assets/view.svg';
import {ReactComponent as ViewHostal} from '../assets/viewhostal.svg';
import {ReactComponent as WardenView} from '../assets/dfgdg.svg';

class AdminDashboard extends Component {

  componentDidMount() {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if (reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload(false);
    } else {
      sessionStorage.removeItem('reloadCount');
    }
    
  }

  render() {
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
                  <div style={{width:'75px',height:'75px',margin:'10px'}}> <Warden/></div>
                  <AddWardenButton /></div>

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
                    <div style={{width:'75px',height:'75px',margin:'10px'}}> <WardenView/></div>
                    <ViewWardenButton/></div>

                  </div>

                  <div style={{
                    // margin:'0 auto',
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    flexDirection:'row',
                      margin: '12px',
    
                  }}>
                  
                  
    
                    <ResetPasswordButton/>
  
                  
               

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
                    <div style={{width:'75px',height:'75px' ,margin:'10px'}}> <Hostel/></div>
  
                    <AddHostelButton /></div>
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
                    <div style={{width:'75px',height:'75px' ,margin:'10px'}}> <ViewHostal/></div>
                    <ViewHostelButton /></div>
              </div>
              </div>

            </div>
          </div>
        </div>
      
    );
  }

}

export default AdminDashboard;