import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../../actions/studentActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {deleteStudent} from "../../actions/studentActions";


class Students extends Component {
  componentDidMount(){
    this.props.getStudents();
  };

onDeleteClick = (id) => {
  this.props.deleteStudent(id,this.props.history);
};

  render() {
    const { students } = this.props.student;
    console.log(students);
    return (
      <div className="container">
        <div className="card card-body mb-3">
        <div className="row">
          </div>
          <h1>Students</h1>
          <hr/>

        {students.map(student => (
      
          <div class="ui list" style={{backgroundColor:'#e3e3e3', padding:'20px', marginBottom:'10px', }}>
          <div class="item" style={{display: "flex", justifyContent: "space-between",}}>
            <div style={{display: "flex", justifyContent: "start"}}>
             <img class="ui avatar image" style={{height: '100%', width: '80px'}} src="https://www.w3schools.com/howto/img_avatar.png"/>
              <div class="content" style={{paddingLeft: '20px'}}>
                <h3 class="header" style={{textTransform: "uppercase", marginBottom:"10px"}}>{student.firstName +"_"+ student.lastName}</h3>
                  <div class="description">
                  <h5> {student.studentid}</h5>
                  {student.email} 
                    
                  </div> 
              </div>
            </div>
              <div class="extra content">
             
                    <div class="ui btn btn-primary" style={{padding:'10px 50px', alignSelf: "flex-end"}}>
                        <Link to={`/viewStudent/${student.email}`} style={{color: 'white'}}>
                        View
                        </Link>
                    </div>
              </div>
   
          </div>
          </div>
          ))}
        </div>
      </div>

        
      
    );
  }
}

Students.propTypes = {
  student: PropTypes.object.isRequired,
  getStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  student: state.student
});

export default connect(
  mapStateToProps,
  {getStudents,deleteStudent}
  ) (Students);
