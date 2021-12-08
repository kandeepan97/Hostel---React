import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { forgetPassword } from "../../actions/securityActions";





class ForgetPassword extends Component {
  constructor() {
    super();

    this.state = {
      
      email:""
    
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
   
    this.props.forgetPassword(this.state.email, this.props.history);
    
   
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
                <h5 className="display-4 text-center">Forget Password </h5>
                <hr />
                <form onSubmit={this.onSubmit} >
                
                  
                  <div className="form-group">
                    <input
                    type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Email"
                      name="email"
                      
                      value={this.state.email}
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

ForgetPassword.propTypes = {
  forgetPassword: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {forgetPassword}
  )(ForgetPassword);

