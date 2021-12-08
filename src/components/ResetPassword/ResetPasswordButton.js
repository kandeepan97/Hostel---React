import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Student} from '../../assets/student1.svg';
import { LockClosedOutline } from 'react-ionicons'


const ResetPasswordButton = () => {

  return (
    
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
       <LockClosedOutline
      color={'#00000'} 
      height="100px"
      width="100px"
    />
    
      <Link to="/resetPassword" className="btn btn-lg btn-info" style = {{marginTop:"10px"}}>
        Reset Password 
      </Link>
      </div>
    
  );
};


export default ResetPasswordButton;