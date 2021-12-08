import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { resetPassword } from "../../actions/securityActions";


class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      email:"",
      currentPassword: "",
      newPassword:"",
      confirmPassword: "",
      role:"",
      
      

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    let email = localStorage.getItem("email");
    let role = localStorage.getItem("role");
    console.log(email);
    
  }

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

  onSubmit(e) {
    e.preventDefault();
 
    const resetPassword = {
      email:localStorage.getItem("email"),
      currentPassword:this.state.currentPassword,
      newPassword:this.state.newPassword,
      confirmPassword:this.state.confirmPassword,
      role:localStorage.getItem("role"),
    };
    this.props.resetPassword(resetPassword, this.props.history);

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
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Reset Password</h5>
                <hr />
                <form onSubmit={this.onSubmit} >
                

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder="Current Password"
                      name="currentPassword"
                      value={this.state.currentPassword}
                      onChange={this.onChange}
                      required
                    />

                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder="New Password"
                      name="newPassword"
                      value={this.state.newPassword}
                      onChange={this.onChange}
                      required
                    />
                </div>

                    <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg "
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
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

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {resetPassword}
  )(ResetPassword);

