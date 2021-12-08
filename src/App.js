import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StudentDashboard from "./components/StudentDashboard";
import WardenDashboard from "./components/WardenDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddRoom from "./components/Room/AddRoom";
import Rooms from "./components/Room/Rooms";
import AddWarden from "./components/Warden/AddWarden";
import Wardens from "./components/Warden/Wardens";
import Students from "./components/Student/Students";
import Register from "./components/UserManagement/Register";
import { Provider } from  "react-redux";
import store from "./store";
import Landing from "./components/Layout/Landing";
import UpdateWarden from "./components/Warden/UpdateWarden";
import UpdateRoom from "./components/Room/UpdateRoom";
import UpdateStudent from "./components/Student/UpdateStudent";
import ViewStudent from "./components/Student/ViewStudents";
import AddHostel from "./components/Hostel/AddHostel";
import Hostels from "./components/Hostel/Hostels";
import UpdateHostel from "./components/Hostel/UpdateHostel";
import Registrations from "./components/Registration/ManageRegistrations";
import Login from "./components/UserManagement/Login";
import ForgetPassword from "./components/UserManagement/ForgetPassword";
import ResetForForgetPassword from "./components/UserManagement/ResetForForgetPassword";
import RegisterRoom from "./components/Registration/RegisterRoom";
import UpdateAdmin from "./components/Admin/UpdateAdmin";
import ManageRegistrations from "./components/Registration/Registrations";
import MyProfileButton from "./components/Warden/MyprofileButton";
import MyProfileWarden from "./components/Warden/MyProfileWarden";
import MyProfileStudent from "./components/Student/MyProfileStudent";
import MyProfileAdmin from "./components/Admin/MyProfileAdmin";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Alert from './components/Layout/Alert';


class App extends Component {
  render() {
    return (
      
      <Provider store = {store}>
      <Router>
        <div className="App">
          <Header/>
          {
            //Public routes
          }
          <Alert />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/resetForForgetPassword/:token" component={ResetForForgetPassword} />
          
          {
            //Private routes
          }
    
    
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/studentDashboard" component={StudentDashboard} />
          <Route exact path="/adminDashboard" component={AdminDashboard}/>
          <Route exact path="/wardenDashboard" component={WardenDashboard} />
          <Route exact path="/viewRoom" component={Rooms} />
          <Route exact path="/addRoom" component={AddRoom} />
          <Route exact path="/addWarden" component={AddWarden} />
          <Route exact path="/viewWarden" component={Wardens} />
          <Route exact path="/updateWarden/:id" component={UpdateWarden} />
          <Route exact path="/updateRoom/:id" component={UpdateRoom} />
          <Route exact path="/updateStudent/:id" component={UpdateStudent} />
          <Route exact path="/viewStudent/:id" component={ViewStudent} />
          <Route exact path="/viewStudent" component={Students} />
          <Route exact path="/signUp" component={Register} /> 
          <Route exact path="/addHostel" component={AddHostel} /> 
          <Route exact path="/viewHostel" component={Hostels} /> 
          <Route exact path="/updateHostel/:id" component={UpdateHostel} /> 
          <Route exact path="/viewSucessfulRegistration" component={Registrations} /> 
          <Route exact path="/registerRoom" component={RegisterRoom} /> 
          <Route exact path="/updateAdmin/:id" component={UpdateAdmin} />
          <Route exact path="/manageRegistration" component={ManageRegistrations} />   
          <Route exact path="/myProfileWarden" component={MyProfileWarden}  />
          <Route exact path="/myProfileAdmin" component={MyProfileAdmin}  />
          <Route exact path="/myProfileStudent" component={MyProfileStudent}  />
          <Route exact path="/resetPassword" component={ResetPassword}  />
        

        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;