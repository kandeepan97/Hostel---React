import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as View} from '../../assets/hostal.svg';

const RegisterRoomButton = () => {
  return (
    <React.Fragment>
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
      <div style={{width:'75px',height:'75px',margin:'10px'}}> <View/></div>
      <Link to="/registerRoom" className="btn btn-lg btn-info">
        Register My Room
      </Link>
      </div>
    </React.Fragment>
  );
};

export default RegisterRoomButton;