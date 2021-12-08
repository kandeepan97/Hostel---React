import axios from "axios";
import { GET_ERRORS,SET_CURRENT_STUDENT,LOGOUT, LOGIN_FAIL} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import  { Redirect } from 'react-router-dom';
import { setAlert } from './alert';


export const createNewStudent = (newStudent, history) => async dispatch => {
  try {
    await axios.post(`http://localhost:8080/api/register`, newStudent);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => async dispatch => {
  // localStorage.removeItem('logged');
  // localStorage.removeItem('jwtToken');
  // localStorage.removeItem('role');
  // localStorage.removeItem('email');

 dispatch({ type: LOGOUT }); 
 
}


export const login = (LoginRequest,history) => async dispatch => {
  try {
    const {email, password, role1, userId} = LoginRequest;
    const login = {email,password};
    
    // post => Login Request
      const res = await axios.post(`http://localhost:8080/api/login`, login);
      // console.log(res);
      // extract token from res.data
      const { token,role } = res.data;
      // store the token in the localStorage
      console.log(res.data);
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("logged", true);
      localStorage.setItem("role",role);
      localStorage.setItem("email",email);
      console.log(role);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      // dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_STUDENT,
        payload: decoded
      });
   if(role=="student"){
     history.push("/studentDashboard");
    }
    else if(role=="warden"){
      history.push("/wardenDashboard");
    }
    else if(role=="admin"){
      history.push("/adminDashboard");
    }
    else{
      console.log("invalid");
    }
      
    }
    
   catch (err) {
    //  console.log("in catch block");
     const errorData = err.response.data;
    //  console.log(errorData);
     if (errorData) {
      //  console.log("Error message: " + errorData.message);
      if ("Unauthorized" == errorData.error) {
        dispatch(setAlert("Please check email or password", 'danger'));
      } else {
        dispatch(setAlert(errorData.error, 'danger'));
      }
     }
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // });
    dispatch({
      type: LOGIN_FAIL
    });
  }
};


export const resetPassword = (resetPassword, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/reset', resetPassword);
    dispatch({ type: LOGOUT });
    history.push('/');
  } catch (err) {
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // });
    const errorData = err.response.data;
    //  console.log(errorData);
     if (errorData) {
      //  console.log("Error message: " + errorData.message);
      dispatch(setAlert(errorData.error, 'danger'));
     }
  } 
};


export const forgetPassword = (email, history) => async dispatch => {
  try {
    const res = await axios.post(`http://localhost:8080/api/forget_password/${email}`);
    // dispatch({ type: LOGOUT });
    dispatch(setAlert("Please check your email", 'success'));
    // history.push('/');
  } catch (err) {
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // });
    const errorData = err.response.data;
    //  console.log(errorData);
     if (errorData) {
      //  console.log("Error message: " + errorData.message);
      dispatch(setAlert(errorData.error, 'danger'));
     }
  } 
};

export const changePassword = (newObj, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/api/resetForForgetPassword', newObj);
    // dispatch({ type: LOGOUT });
    dispatch(setAlert("Password reset success!", 'success'));
    history.push('/login');
  } catch (err) {
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // });
    const errorData = err.response.data;
    //  console.log(errorData);
     if (errorData) {
      //  console.log("Error message: " + errorData.message);
      dispatch(setAlert(errorData.error, 'danger'));
     }
  } 
};
