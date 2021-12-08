import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getStudentByEmail,updateStudent } from "../../actions/studentActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {Button, ButtonToolbar} from "react-bootstrap";
import {Link} from "react-router-dom";

 class UpdateStudent extends Component {

    constructor(){
        super();

        this.state = {
            firstName: "",
            studentid: "",
            mobileNumber: "",
            email:"",
            lastName:"",
            hostelId:"",
            address:"",
            department:"",
            faculty:"",
            year:"",
            gender:"",
            
      
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const{
            firstName,
            studentid,
            mobileNumber,
            email,
            lastName,
            hostelId,
            address,
            department,
            faculty,
            year,
            gender,
            
        } = nextProps.student;

       this.setState({
        firstName,
        studentid,
        mobileNumber,
        email,
        lastName,
        hostelId,
        address,
        department,
        faculty,
        year,
        gender,
       

       });

    } 


     componentDidMount(){
        
         const { email } = this.props.match.params;
         this.props.getStudentByEmail(email);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();

         const updateStudent = {

            firstName: this.state.firstName,
            studentid: this.state.studentid,
            mobileNumber: this.state.mobileNumber,
            email:this.state.email,
            lastName:this.state.lastName,
            hostelId:this.state.hostelId,
            address:this.state.address,
            mobileNumber:this.state.mobileNumber,
            department:this.state.department,
            faculty:this.state.faculty,
            year:this.state.year,
            gender:this.state.gender,
            
         };
         this.props.updateStudent(updateStudent,this.props.history);
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
                             placeholder="student Id"
                             name="studentid"
                             value={this.state.studentid} 
                             onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            placeholder="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                             placeholder="Last Name"
                             name="lastname"
                             value={this.state.lastName}
                             onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Mobile Number"
                         name="mobileNumber"
                         value={this.state.mobileNumber}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                     placeholder="Email"
                     value={this.state.email}
                     onChange={this.onChange}
                     name="email"
                     />
                     <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Address"
                         name="address"
                         value={this.state.address}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Department"
                         name="department"
                         value={this.state.department}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Faculty"
                         name="faculty"
                         value={this.state.faculty}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Year"
                         name="year"
                         value={this.state.year}
                         onChange={this.onChange}/>
                    </div>
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
            >
                Update
            </Button>
            <Link to = '/studentDashboard'>
            <Button
                bsSize="small"
                style={{"width": "250%","backgroundColor": "#999",}}
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

UpdateStudent.propTypes = {
    getStudentByEmail: PropTypes.func.isRequired,
    updateStudent:PropTypes.func.isRequired,
    student: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    student: state.student.student
});

export default connect(
    mapStateToProps,
    {getStudentByEmail,updateStudent} 
    )(UpdateStudent);