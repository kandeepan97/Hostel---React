import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { changePassword } from "../../actions/securityActions";





class ResetForForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      
      password:"",
    
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
  
  onSubmit(e) {
    e.preventDefault();
    const path = window.location.pathname;
    const token = path.split('/')[2];
    const newObj = {
      
      newPassword:this.state.password,
      token: token
      
    };
    console.log(newObj);
    this.props.changePassword(newObj, this.props.history);
    
   
  }
  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'30px'}}>
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Reset Password </h5>
                <hr />
                <form onSubmit={this.onSubmit} >
                
                  
                 
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder=" New Password"
                      name="password"
                      
                      value={this.state.password}
                      onChange={this.onChange}
                      required
                    />

                  </div>
                  
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder="Confirm New Password"
                      name="confirmPassword"
                      
                      value={this.state.confirmpassword}
                      onChange={this.onChange}
                      required
                    />

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

ResetForForgetPassword.propTypes = {
  createWarden: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {changePassword}
  )(ResetForForgetPassword);

